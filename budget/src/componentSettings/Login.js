import React,{useState}  from "react";
import isEmail from 'validator/lib/isEmail';
import { loginaction } from "../reduxStore/actiongenerator/useraction";
import { useDispatch } from "react-redux";
import "../css/login.css"




const Login=(props)=>{
    
    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")
    const [formerror,setFormerror]=useState({})
    const error={}
    const dispatch=useDispatch()
  

    const handlchange=(e)=>{
        const name=e.target.name
          if(name==="email"){
            setEmail(e.target.value)
         }else if(name==="password"){
            setPassword(e.target.value)
         }

    }
    const errorfunction=()=>{
        if(!isEmail(email)){
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
                Email:email,
                Password:password
            }

            dispatch(loginaction(formdata))
    
            
           props.handletogal()
        }else{
            console.log({error:"erroe"})
            setFormerror(error)
            console.log(error)
            console.log(formerror)
        }

      setEmail("")
      setPassword("")

    }
 
    
    return(
        <div class="loginform">
            <form onSubmit={handlesubmit}>
                <div class="logininner">
                <div class="email"> 
                    <label>Email</label><br/>
                    <input type="text" value={email} onChange={handlchange} name="email"/>
                    {formerror.email&&<p>{formerror.email}</p>}<br/>
                    <label>Pass word</label><br/> 
                </div>
                 <div class="password">
                    <input type="text" value={password} onChange={handlchange} name="password"/>{formerror.password&&<p>{formerror.password}</p>}<br/>
                  
                 </div>
                 <div class="submit">
                 <input type="submit" value="save"   />
                 </div>
           
                </div>
              
        </form>
        </div>
    )
    
}
export default Login