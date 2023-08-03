import mongoose from "mongoose"
import { iAuth } from "../utils/Interface";


interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema({
    userName:{
        type: String,
        require: String,
    },
    email:{
        type: String,
        require: String,
        unique: true,
    },
    password:{
        type: String,
        require: String,
    },
   avatar:{
        type: String,
        require: String,
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