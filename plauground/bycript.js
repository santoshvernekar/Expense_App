const bcryptjs=require("bcryptjs")

const password="123456san"

        bcryptjs.genSalt()
        .then((slat)=>{
        console.log(slat,"salt")
                bcryptjs.hash(password,slat)
                .then((encurpted)=>{
                    console.log("en",encurpted)
                })
                .catch(()=>{
                    
                })
        })
        .catch(()=>{

        })