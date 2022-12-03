const jwt=require("jsonwebtoken")
const Usermodel=require("../model/usermodel")

const authenticate=(req,res,next)=>{
  const token=req.header("Authorization").split(" ")[1]

  let tokendata
  try {
     tokendata=jwt.verify(token,"dct123")
     Usermodel.findById(tokendata._id)
       .then((user)=>{
          
          req.user= user
          next()
       })
       .catch((e)=>{
           res.json(e.message)
       })

  } catch (e) {
    res.json(e.message)
  }
}

module.exports={
  authenticate
}