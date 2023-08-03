import express, { Application } from "express"
import cors from "cors"
import authRouter from "../router/authRouter"


export const mainApp = (app:Application)=>{
  app.use(express.json());
  app.use(cors());
  app.use("/api/v1",authRouter)

  app.get("/")
}