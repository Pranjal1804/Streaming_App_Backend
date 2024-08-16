const asynchandler=(func)=>async (error,req,res,next)=>{
    try{
        await func(error,req,res,next)
    }catch(error){
        request.status(error.code||500).json({
            success:false,
            message:error.message
        })
        }
}
export default asynchandler