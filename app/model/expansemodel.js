const mongoose=require("mongoose")
const { softDeletePlugin } = require('soft-delete-plugin-mongoose');

const Schema=mongoose.Schema
const expanseschema=new Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
       type:Number,
       required:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Categorymodel",
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"Categorymodel",
        required:true
    },
    isDelete:{
        type:Boolean,
        default: false
    }
},{timestamps:true})


const Expansemodel=mongoose.model("Expansemodel",expanseschema)
      
module.exports=Expansemodel