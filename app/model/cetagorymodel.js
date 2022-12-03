const mongoose=require("mongoose")


const Schema=mongoose.Schema

const Categoryschema=new Schema({
         category_name:{
            type:String
         },
         userId:{ type:Schema.Types.ObjectId , ref:"Usermodel",required:true}
})
const Categorymodel=mongoose.model("Categorymodel",Categoryschema)

module.exports=Categorymodel