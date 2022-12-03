const mongoose=require("mongoose")

const configuredatabase=()=>{

    mongoose.connect("mongodb://localhost:27017/users-auth2022")
     .then(()=>{
        console.log("connected")
     })
     .catch(()=>{
         console.log("not connected")
     })
}
module.exports=configuredatabase