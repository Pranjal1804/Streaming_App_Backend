import connectDB  from "./db/index.js"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
connectDB()


















/*const app=express()
; (async ()=>{
      try{
        await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT} `);
        })
      }catch(error){
        console.log("Error: ",error)
        throw error
      }
})()
      The code above is a casual approach to connect a database but we will not use it as we want to follw a professional approach*/