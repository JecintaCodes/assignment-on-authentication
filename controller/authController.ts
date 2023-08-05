import express, { Request, Response } from "express"
import authModel from "../model/authModel"
import cloudinary from "../config/Cloudinary"


export const createUser = async(req:Request, res:Response)=> {
    try { 

        const {userName, email, password} = req.body;


const {secure_url,public_id} = await cloudinary.uploader.upload(req.file?.path!)

        const newUser:any = await authModel.create({
            userName,
            email,
            password, 
            avatar : secure_url,
            avatarID: public_id,
        })
        
        console.log(newUser)
        return res.status(201).json({
            message: "user created",
            data: newUser
        })
    } catch (error) {
        
console.log(error)
        return res.status(404).json({
            message: "cant create user",
            data: error.message
                
            })
            
            
        }
}

export const signInUser = async(req:Request, res:Response)=> {
    try {

        const { email, password} = req.body;
        const sign = await authModel.findOne({email})

        if (sign){
            return res.status(201).json({
                message:`welcome ${sign.userName}`,
                data: sign._id
            })
        }else{
            
        return res.status(404).json({
            message: "email or password wrong "
        
        })
        }
        

    } catch (error) {
        
        return res.status(404).json({
            message: "cant signIn please SignUp",
            data: error.message
                
            })
            
            
 }}

export const findUsers = async(req:Request, res:Response)=>{
    try {
        const find = await authModel.find()

        return res.status(200).json({
            message:"all users gotten",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant find users",
        data: error.message
       }) 
    }
}

export const findOneUsers = async(req:Request, res:Response)=>{
    try {

        const {authID} = req.params;
        const find = await authModel.findById(authID)

        return res.status(200).json({
            message:"one users gotten",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant find user",
        data: error.message
       }) 
    }
}

export const updateUser = async(req:Request, res:Response)=>{
    try {

        const {userName} = req.body;
        const {authID} = req.params;
        const find = await authModel.findByIdAndUpdate(authID,{userName}, {new:true})

        return res.status(201).json({
            message:" user updated",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:" user not updated",
        data: error.message
       }) 
    }
}

export const deleteUsers = async(req:Request, res:Response)=>{
    try {

       
        const {authID} = req.params;
        const find = await authModel.findByIdAndDelete(authID)

        return res.status(200).json({
            message:" user deleted",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant delete users",
        data: error.message
       }) 
    }
}
