import { Router } from "express";
import { createUser, signInUser } from "../controller/authController";
import upload from "../config/Multer";


const authRouter: any = Router();


authRouter.route("/create-user").post(upload,createUser)
authRouter.route("/sign-in").post(signInUser)

export default authRouter