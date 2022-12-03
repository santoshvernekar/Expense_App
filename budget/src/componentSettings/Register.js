import React, { useState }  from "react";
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from "react-redux";
import { registeraction } from "../reduxStore/actiongenerator/useraction";
import "../css/register.css"

const Register=(props)=>{
    const [username ,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")
    const [pic ,setPic]=useState([])
    const [formerror,setFormerror]=useState({})

  
    const error={}
    const dispatch=useDispatch()
  
    const handlchange=(e)=>{
        const name=e.target.name
         if(name==="username"){
            setUsername(e.target.value)
         }else if(name==="email"){
            setEmail(e.target.value)
         }else if(name==="password"){
            setPassword(e.target.value)
         }else if(name==="avatar"){
            setPic(e.target.files[0])
         }

    }
    const errorfunction=()=>{
        if(username.trim().length===0){
           error.username="username required"
        }
        else if(!isEmail(email)){
            error.email="email required"
        }else if(password.trim().length===0){
            error.password="password required"
        }
    }
    const handlesubmit=(e)=>{
       
        e.preventDefault()
        errorfunction()
        if(Object.keys(error).length===0){
            
          
            const formdata={
                Username:username,
                Email:email,
                Password:password, 
            }

            console.log(formdata)
            dispatch(registeraction(formdata))
           
        }else{
            console.log({error:"erroe"})
            setFormerror(error)
 
        }
        setUsername("")
        setEmail("")
        setPassword("")
    
           
    }
    return(
        <div class="registerform">
        <form onSubmit={handlesubmit} action="/stats" enctype="multipart/form-data" method="post" >
            <div class="innerregister">
                <label>User name</label><br/>
                <input type="text" value={username} onChange={handlchange} name="username"/>
                {formerror.username&&<p>{formerror.username}</p>}            <br/>
                <label>Email</label><br/>
                <input type="text" value={email} onChange={handlchange} name="email"/>
                {formerror.email&&<p>{formerror.email}</p>}<br/>  
                <label>Pass word</label><br/>
                <input type="text" value={password} onChange={handlchange} name="password"/>
                {formerror.password&&<p>{formerror.password}</p>} 
                <input type="file" onChange={handlchange} name="avatar"/>      <br/>
                <input type="submit" value="save"/>
            </div>
          
        </form>
    </div>
    )
}
export default Register