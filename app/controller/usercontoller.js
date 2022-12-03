const Usermodel=require("../model/usermodel")
const Categorymodel=require("../model/cetagorymodel")
const Budgetmodel=require("../model/budgetmodel")
const bcryptjs=require("bcryptjs")
const fs=require("fs")
const jwd=require("jsonwebtoken")

const usercontroller={}


usercontroller.register=(req,res)=>{
    
    // let fileType=req.file.mimetype.split("/")[1];
    // let newfilename=req.file.filename+"."+fileType;
    // fs.rename(`./uploads/${req.file.filename}`,`./uploads/${newfilename}`,function(){
    //     console.log("callback")
    // })
    
    const body={
         Username:req.body.Username,
         Email:req.body.Email,
         Password:req.body.Password,
         
    }
    console.log(body)
 
    const user=new Usermodel(body)
            bcryptjs.genSalt()
              .then((slat)=>{
                  bcryptjs.hash(user.Password,slat)
                    .then((encurpte)=>{
                        user.Password=encurpte
                            user.save()
                                .then((user)=>{
                                    const budgetvalue={budget:0 ,userId:user.id}
                                    const budget=new Budgetmodel(budgetvalue)
                                    budget.save()
                                    let body={category_name:"uncategory" ,userId:user._id}
                                    const category=new Categorymodel(body)
                                   
                                    category.save()
                                      .then((r)=>{
                                    
                                      })
                          
                                    res.json(user)
                                  
                                })
                                .catch((error)=>{
                                    res.json(error)
                                })
                    })
                    .catch(()=>{

                    })
              })
              .catch(()=>{

              })
}

usercontroller.login=(req,res)=>{
    let body=req.body
    
    Usermodel.findOne({Email:body.Email})
        .then((user)=>{
            console.log(user,"userrrrr")
            if(!user){
               res.json({
                errors:"invalid passsowrd and email"
               })
            }
            console.log(user,"hhhhhhhhhhhhhhhhhhhhhhhhhhhh")
            bcryptjs.compare(body.Password,user.Password)
             .then((match)=>{
                if(match){
                 
                    const tokendata={
                          _id:user.id,
                          Email:user.Email,
                          Username:user.Username
                    }
                    const token=jwd.sign(tokendata,"dct123",{expiresIn:"2d"})
                     
                    res.json({
                           token:`Bearer ${token}`
                    })
                }
                else{
                    res.json({error:"not found"})
                }
             })
            
        })
       
}
usercontroller.account=(req,res)=>{
      res.json(req.user)
      console.log(req.user)
}



module.exports=usercontroller