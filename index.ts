import express,{ Application } from "express"
import { mainApp } from "./app/mainApp"
import { Authentication } from "./config/DataBase"
import env from "dotenv"
env.config()


const realport: number = parseInt(process.env.PORT!)
const Port: number = realport
const app: Application = express()
mainApp(app)

const server = app.listen(Port,()=>{
    Authentication()
    console.log(`server is listening on ${Port}..............`)
}) 

process.on("uncaughtException", (err: any)=>{
    console.log(" serveris shutting down due to uncaughtException ")

    console.log("uncaughtException", err)
    process.exit(1)
})
process.on("unhandleRejection", (reason: any)=>{
    console.log(" serveris shutting down due to unhandleRejection ")

    console.log("unhandleRejection", reason)
   
    server.close = (()=>{
        process.exit(1)
    })
})