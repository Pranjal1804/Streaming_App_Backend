import asyncHandler from "../utils/asynchandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Users } from "../models/users.model.js";
import { cloudUpload } from "../utils/fileupload.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser= asyncHandler(async(req,res)=>{
   //take user credentials from frontend
   const {username,email,fullname,password}=req.body
   console.log("email: ",email)
   console.log("password: ",password)
   //validate the details
   if(fullname=""){
    throw new ApiError(400,"Fullname is required")
   }
   if(email==""){
    throw new ApiError(400,"Email is required")
   }
   if(username==""){
    throw new ApiError(400,"Username is required")
   }
   if(password==""){
    throw new ApiError(400,"Password is required")
   }
   //check for existing user
   const existingUser=Users.findOne({
    $or:[{username}, {email}]
   })
   if(existingUser){
    throw new ApiError(409,"User with email or username already exists")
   }
   const avatarLocalPath=req.files?.avatar[0]?.path
   const coverImageLocalPath=request.files?.coverImage[0]?.path
    //check for image files
   if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required")
   }
   //upload image files to cloudinary
    const avatar=await cloudUpload(avatarLocalPath)
    const cover=await cloudUpload(coverImageLocalPath)
        if(!avatar){
            throw new ApiError(400,"Avatar file is required")
        }
   //create user object- create entry in db
   const user =await Users.create({
    fullname,
    email,
    password,
    avatar:avatar.url,
    coverImage: cover?.url||"",
    username: username.toLowerCase()
   })
    //remove password and refresh token fields
   const createdUser= await Users.findById(user._id).select(
    "-password -refreshToken"
   )
   //check for user creation
   if(!createdUser){
    throw new ApiError(500,"Something Went wrong while registering the user")
   }
   //return response
   return res.status(201).json(
    new ApiResponse(200,createdUser,"User Successfully Registered")
   )
})
export  {registerUser}