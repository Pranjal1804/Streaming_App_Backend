import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express();
app.use(cors({
    origin:process.env.CORS_URL,
    credentials:true
}))
app.use(express.json({limit:"100kb"}))
app.use(express.urlencoded({extended:true,limit:"50kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//exports router
import userRouter from "./routes/users.routes.js"
app.use("/api/v1/users",userRouter)
export default app