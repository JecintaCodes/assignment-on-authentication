import express, { Request, Response } from "express"
import authModel from "../model/authModel"
import cloudinary from "../config/Cloudinary"


export const createUser = async(req:any, res:Response)=> {
    try {

        const {userName, email, password} = req.body;


const {secure_url, public_id} = await cloudinary.uploader.upload(req.file?.path)

        const newUser = await authModel.create({
            userName,
            email,
            password, 
            avatar: secure_url,
            avatarID: public_id,
        })
        
        return res.status(201).json({
            message: "user created",
            data: newUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "cant create user",
            data: error.message
                
            })
            
        }
    }
