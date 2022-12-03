const mongoose=require("mongoose");
const isEmail=require("validator/lib/isEmail");

const Schema=mongoose.Schema
const userschema=new Schema({
    Username:{
        type:String,
        required:true,
        minlength:6,
        maxlength:64,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: function(value){
                return isEmail(value)
            },
            message:function(){
               return `is invalid mail`
            }
        }
    },
    Password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    }
})

const Usermodel=mongoose.model("Usermodel",userschema)
console.log(Usermodel)

module.exports=Usermodel