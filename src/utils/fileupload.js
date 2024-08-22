import { v2 as cloudinary} from "cloudinary"
import fs from "fs"
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
const cloudUpload=async (localfile) => {
    try{
        if(!localfile)return null
        const response =await cloudinary.v2.uploader.upload(localfile,{
            resource_type:auto
        })
        console.log("File uploaded on Cloudinary",response.url)
            return response
    }catch(error){
         fs.unlinkSync(localfile)
         return null;
    }
}
export {cloudUpload} 
 