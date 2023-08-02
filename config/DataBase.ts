import mongoose from "mongoose"
import env from "dotenv"
env.config()

const ADB: string = process.env.MONGO!

export const Authentication = async()=>{
   try {
    mongoose.connect(ADB).then(()=>{
        console.log(`connected to ${ADB}`)
    })
   } catch (error) {
    console.log(error)
   }

}