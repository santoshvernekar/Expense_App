const mongoose=require("mongoose")

const Schema=mongoose.Schema
const budgetschema=new Schema({
    budget:{
        type:Number
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"Usermodel",
        required:true
    }
})

const Budgetmodel=mongoose.model("Budgetmodel",budgetschema)
console.log(Budgetmodel)

module.exports=Budgetmodel