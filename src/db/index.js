import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";
const connectDB=async ()=>{
    try{
     const connectionInstance=  await mongoose.connect(`mongodb+srv://Pranjal:Pranjal123@pranjal.gvwaw.mongodb.net/${DB_NAME}`)
     console.log(`Connection established with the database!! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Error: ",error);
        process.exit(1);
    }
}
export default connectDB