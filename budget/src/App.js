import React,{useState,useEffect} from "react";
import Budget from "./componentSettings/Budget"
import Register from "./componentSettings/Register";
import Login from "./componentSettings/Login";
import { Link,Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Intro from "./componentSettings/intro";

function App(props) {
  const [togal ,setTogal]=useState(false)
 const dispatch=useDispatch()
  const login=useSelector((state)=>{
         return state.login
  })
  console.log(login)

  const handletogal=()=>{
      setTogal(!togal)
  }

   console.log("App")
  
  return (
    <div>{togal?<Budget handletogal={handletogal}/>:<div>
       <div><header class="header"><nav class="nav">
        <div class="login" >
           <h3><Link to="/">Home</Link> </h3> 
        </div>
        <div class="register">
        <h3><Link to="/Register" >Register</Link></h3>
       </div>
       <div class="login">
          <h3><Link to="/Login" >Login</Link></h3>
        </div>
        </nav></header>
       </div>
       <Route path="/" component={Intro} exact={true}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Login"  render={(props)=>{
             return <Login
             {...props} 
             handletogal={handletogal} 
             />
      }}/>
          </div>}
  
    </div>
  )

}

export default App;
