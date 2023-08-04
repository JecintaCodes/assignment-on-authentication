import mongoose from "mongoose";


export  interface iCategory{
    articleID?:string
    article?:{};
    authorID?: string
}

interface iCategoryData extends iCategory, mongoose.Document{}

const categoryModel = new mongoose.Schema({
    authorID:{
        type: String
    },
    articleID:{
        type: String
    },
    author:{
        type: {},
    },
}, {timestamps: true})

 export default mongoose.model<iCategoryData>("categories", categoryModel)