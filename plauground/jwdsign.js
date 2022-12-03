const jwd=require("jsonwebtoken")

const user={
    id:1,
    name:"santosh"
}

const token=jwd.sign(user,"dct123",{expiresIn:"10"})

console.log(token)

const tokenv="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InNhbnRvc2giLCJpYXQiOjE2NjQyODIyMDAsImV4cCI6MTY2NDI4MjIwMH0.HIBeLGOZ18PyGErGbDD_VJ0tgrmr2qHPSCTnc7ABL8k"
// const tokenvalue=jwd.verify(tokenv,"dct123")

// console.log(tokenvalue)

let data

try{
    data=jwd.verify(tokenv,"dct123")
    console.log(data)
}
catch(e){
 console.log(e.message)
}