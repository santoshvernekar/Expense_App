
const Categorymodel = require("../model/cetagorymodel")
const Expansemodel=require("../model/expansemodel")

const expansecontroller={}

expansecontroller.list=(req,res)=>{                 /////////////  get data
    const id=req.user._id 
    console.log(id)
  Expansemodel.find({userId:id})
    .then((expanse)=>{
         res.json(expanse)
         
    })
    .catch((error)=>{
           res.json(error)
    })
}

expansecontroller.add=(req,res)=>{                ////////////// adding 
    const tokenid=req.user._id
   
    const body=req.body
    const expanse=new Expansemodel(body)
     if(tokenid.toString()===expanse.userId.toString()){
        expanse.save()
        .then((expanse)=>{
            res.json(expanse)
        })
        .catch((error)=>{
            res.json(error)
        })
     }else{
        res.json({error:"not found"})
     }
   
}

// expansecontroller.softdelete=(req,res)=>{       //////////// soft remove function //put requset update
//   const tokenid=req.user._id.toString()
//   console.log(tokenid)
//   const id=req.params.id
//   console.log(id)
//   Categorymodel.findOne({ userId: tokenid,category_name:"uncategory"})
//     .then((category)=>{
//           console.log(category.userId.toString())
//         if(tokenid===category.userId.toString()){
//             const uncat_id= category._id
//             Expansemodel.findByIdAndUpdate(id , {categoryId:uncat_id})
//                   .then((expanse)=>{
//                      res.json(expanse)
//                   })
//         }else{
//             res.json({error:"not found"})
//         }
         
    
//     })
//     .catch((error)=>{
//          res.json(error)
//     })

    
// }

expansecontroller.softdelete=(req,res)=>{
    id=req.params.id
    tokenid=req.user._id.toString()
   Expansemodel.findOne({_id:id})
   .then((expanse)=>{
      if(tokenid===expanse.userId.toString()){
        Expansemodel.softDelete({_id:id})
          .then((expanse)=>{
            console.log(expanse)
             res.json(expanse)
          })
          .catch((error)=>{
              res.json(error)
          })
      }else{
        res.json({error:"usernot found"})
      }
   })
}
expansecontroller.restore=(req,res)=>{
   Expansemodel.restore()
    .then((expanse)=>{
         res.json(expanse)
    })
    .catch((error)=>{
          res.json(error)
    })
}

expansecontroller.getId=(req,res)=>{       ///get by id
   id=req.params.id
   tokenid=req.user._id.toString()
   Expansemodel.findById(id)
     .then((expanse)=>{
        if(tokenid===expanse.userId.toString()){
            res.json(expanse)
        }else{
            req.json({error:"not found user"})
        }
     })
     .catch((error)=>{
        res.json(error)
     })
}

expansecontroller.softdelete=(req,res)=>{           ///////////update operation
    const id=req.params.id
  const tokenid=req.user._id.toString()
  Expansemodel.findById(id)
     .then((expanse)=>{
      console.log(expanse.userId.toString(),"hhhhhhhhhhhhhhhhhhhh")
        if(tokenid===expanse.userId.toString()){
            Expansemodel.findOneAndUpdate( {_id:id},{isDelete:true},{new:true})
              .then((expanse)=>{
                console.log(expanse,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
                res.json(expanse)
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

expansecontroller.restore=(req,res)=>{           ///////////update operation
  const id=req.params.id
const tokenid=req.user._id.toString()
Expansemodel.findById(id)
   .then((expanse)=>{
    console.log(expanse.userId.toString(),"hhhhhhhhhhhhhhhhhhhh")
      if(tokenid===expanse.userId.toString()){
          Expansemodel.findOneAndUpdate( {_id:id},{isDelete:false},{new:true})
            .then((expanse)=>{
              console.log(expanse,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
              res.json(expanse)
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

expansecontroller.delete=(req,res)=>{             ////////////////deleting 
    const tokenid=req.user._id.toString()
    const id=req.params.id
    Expansemodel.findOne({_id:id})
      .then((expanse)=>{
       
          if(expanse.userId.toString()===tokenid){
            Expansemodel.findByIdAndRemove(id)
                .then((expanse)=>{
                    res.json(expanse)
                })
                .catch((error)=>{
                    res.json(error)
                })
          }else{
            res.json({})
          }
      })
      .catch((error)=>{
        res.json(error)
      })
   

}
module.exports=expansecontroller