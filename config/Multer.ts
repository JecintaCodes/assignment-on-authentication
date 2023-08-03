import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req: any, file:any, cb: any) {
        cb(null, "upload");
    },
    filename: function(req: any, file: any, cb: any) {
        const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() *1e9);
        cb(null, file.fieldname +"_" + uniqueSuffix + ".jpg");
    },
});

const upload = multer({storage}).single("avatar");

export default upload;