
const Budgetmodel=require("../model/budgetmodel")

const budgetcontroller={}
  
budgetcontroller.list=(req,res)=>{
const tokenId=req.user._id.toString()
   
  Budgetmodel.findOne({userId:tokenId})
      .then((budget)=>{
   
        //console.log(budget.userId.toString())
        if(tokenId===budget.userId.toString()){
          res.json(budget)
        }else{
          res.json({error:"not found"})
        }
        
      })
    
      .catch((error)=>{
           res.json(error)
      })
}



budgetcontroller.update=(req,res)=>{
  const tokenId=req.user._id.toString()
  
  const body=req.body

  const id=req.params.id
  
  Budgetmodel.findOne({_id:id})
     .then((budget)=>{
        if(tokenId===budget.userId.toString()){
          Budgetmodel.findByIdAndUpdate(budget._id,body,{new:true})
           .then((budget)=>{
                 res.json(budget)
                 console.log(budget)
           })
           .catch((error)=>{
                res.json(error)
           }) 
        }
     })
     .catch((error)=>{
        res.json(error)
     })

}

module.exports =budgetcontroller