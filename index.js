const express=require("express")
const configuredatabase=require("./configure/database")
const cors=require("cors")
const route=require("./configure/routes")
const app =express()
const port=3049
configuredatabase()
app.use(express.json())
app.use(cors())
app.use("/",route)
// app.use("/static",express.static("./uploads"))


app.listen(port,()=>{
    console.log("server connected")
})