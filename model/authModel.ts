import mongoose from "mongoose"
import { iAuth } from "../utils/Interface";


interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
   avatar:{
        type: String,
       
    },
   avatarID:{
        type: String
       
    },
    article:[
        {
            type: String,
            ref: "articles"
        },
    ]
},
{timestamps: true}

)

export default mongoose.model<iAuthData>("auths", authModel)