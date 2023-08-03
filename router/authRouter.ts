import { Router } from "express";
import { createUser } from "../controller/authController";
import upload from "../config/Multer";


const authRouter: any = Router();


authRouter.route("/create-user").post(upload,createUser)

export default authRouter