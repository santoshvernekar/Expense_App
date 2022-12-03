const Categorymodel=require("../model/cetagorymodel")
const Expansemodel=require("../model/expansemodel")
const Usermodel=require("../model/usermodel")

const categorycontroller={}

categorycontroller.list=(req,res)=>{
 const id=req.user._id

  Categorymodel.find({userId:id})
    .then((u)=>{
        res.json(u)
        console.log(u)
    })
    .catch((e)=>{
        res.json(e)
    })
}
categorycontroller.add=(req,res)=>{
    body=req.body
    id=req.user._id.toString()
    
    const category=new Categorymodel(body)
      if(id===category.userId.toString()){
        category.save()
           .then((category)=>{
              res.json(category)
           })
           .catch((error)=>{
                res.json(error)
           })
      }else{
          res.json({error:"user not found"})
      }
        
}
categorycontroller.listId=(req,res)=>{
    tokenid=req.user._id.toString()
    id=req.params.id
    Categorymodel.findById(id)
      .then((category)=>{
          if(tokenid===category.userId.toString()){
              res.json(category)
          }else{
            res.json({error:"not matched id"})
          }
      })
      .catch((error)=>{
         res.json(error)
      })
}
categorycontroller.update=(req,res)=>{           ///////////update operation
  const id=req.params.id
const body=req.body
const tokenid=req.user._id.toString()
Categorymodel.findById(id)
   .then((category)=>{
      if(tokenid===category.userId.toString()){
          console.log(body)
          Categorymodel.findOneAndUpdate( {_id:id},body,{new:true})
            .then((category)=>{
              console.log(category)
              res.json(category)
            })
            .catch((error)=>{
                  res.json(error)
            })
      }else{
          res.json({error:"not found"})
      }
   })
   .catch((error)=>{
       res.json(error)
   })
 
}
categorycontroller.delete=(req,res)=>{ 
    tokenid=req.user._id.toString()
      catid=req.params.id
      Categorymodel.findOne({_id:catid})
         .then((category)=>{
            if(tokenid===category.userId.toString()){
                Categorymodel.findByIdAndRemove(catid)
                .then((category)=>{
                     Expansemodel.deleteMany({categoryId:catid})
                      .then((expanse)=>{
                        console.log(expanse)
                      })
                     res.json(category)
                })
                .catch((error)=>{
                    console.log(error)
                }) 

            }
          
         })
         .catch((error)=>{
            res.json(error)
         })
    
   
    
}
module.exports=categorycontroller
