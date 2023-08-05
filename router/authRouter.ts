import { Router } from "express";
import { createUser, deleteUsers, findOneUsers, findUsers, signInUser, updateUser } from "../controller/authController";
import upload from "../config/Multer";


const authRouter: any = Router();


authRouter.route("/create-user").post(upload, createUser)
authRouter.route("/sign-in").post(signInUser)
authRouter.route("/find-one/authID").get(findOneUsers)
authRouter.route("/find").get(findUsers)
authRouter.route("/update/authID").patch(updateUser)
authRouter.route("/delete/authID").delete(deleteUsers)

export default authRouter