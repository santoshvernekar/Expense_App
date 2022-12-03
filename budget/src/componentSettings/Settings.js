import React,{useState,useEffect} from "react";
import Budgetinfo from "./Budgetinfo";
import Categary from "./Categary";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getbudget, userId } from "../reduxStore/actiongenerator/useraction";
import Categarybox from "./categorybox";



const Settings=(props)=>{
    const [id,setId]=useState("")
    const [userid,setUserid]=useState("")
    const [budget,setBudget]=useState("")
   
    const token=useSelector((state)=>{
      return state.login[0].token.split(" ")[1]
    })
    console.log(token,"tokennn")
    const dispatch=useDispatch()
      axios.get(`http://localhost:3049/users/budget`,{headers:{Authorization :`Bearer ${token}`}})
        .then((res)=>{
         
            setUserid(res.data.userId)
            setId(res.data._id)
            setBudget(res.data.budget)
        })
       useEffect(()=>{
             dispatch(userId(userid))
             dispatch(getbudget(token))
       },[userid])

    
    return(
        <div class="budget">
            <Budgetinfo id={id} budget={budget} token={token}/>
            <Categary/>
            <Categarybox/>
        </div>
    )
}
export default Settings