import express, { Request, Response } from "express"
import authModel from "../model/authModel"
import cloudinary from "../config/Cloudinary"


export const createUser = async(req:Request, res:Response)=> {
    try {

        const {userName, email, password} = req.body;


// const {secure_url, public_id} = await cloudinary.uploader.upload(req.file?.path)

        const newUser = await authModel.create({
            userName,
            email,
            password, 
            avatar : "img",
            avatarID: "img",
        })
        
        console.log(newUser)
        return res.status(201).json({
            message: "user created",
            data: newUser
        })
    } catch (error) {
        
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
            
            
        }
    }
