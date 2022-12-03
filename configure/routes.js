const express=require("express");
const multer=require('multer')
const upload=multer({ dest: 'uploads/' })
const route=express.Router();

const app=express()
app.use(express.static("./uploads"))
/////////////////////////////////////////////////////////////// importing model files
const usercontroller=require("../app/controller/usercontoller")
const {authenticate}=require("../app/middleware/authenticate")
const categorycontroller=require("../app/controller/categorycontroller")
const budgetcontroller=require("../app/controller/budgetcontroller")
const expansecontroller=require("../app/controller/expensecontroller")


route.post("/users/register",usercontroller.register)
route.post("/users/login" ,usercontroller.login)
route.get("/users/account",authenticate,usercontroller.account)


route.get("/users/category",authenticate,categorycontroller.list)
route.post("/users/category",authenticate,categorycontroller.add)
route.get("/users/category/:id",authenticate,categorycontroller.listId)
route.put("/users/category/:id",authenticate,categorycontroller.update)
route.delete("/users/category/:id",authenticate,categorycontroller.delete)


route.get("/users/budget",authenticate,budgetcontroller.list)  
//route.post("/users/budget",authenticate,budgetcontroller.add)
 route.put("/users/budget/:id",authenticate,budgetcontroller.update)
// route.delete("/users/budget/:id",authenticate,budgetcontroller.delete)


route.get("/users/expanse",authenticate,expansecontroller.list)
route.post("/users/expanse",authenticate,expansecontroller.add)
route.get("/users/soft/expanse/:id",authenticate,expansecontroller.softdelete)////////////
route.delete("/users/expanse/:id",authenticate,expansecontroller.delete)
route.get("/users/expanse/:id",authenticate,expansecontroller.getId)
route.get("/users/expanse/restore/:id",authenticate,expansecontroller.restore)



module.exports=route