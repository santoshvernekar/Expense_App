import React from "react";
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import Eachcategary from "./Eachcategary";

const Categorylist=(props)=>{
   
   const [categaryvalue, setCategaryvalue]=useState([])

 const categary=useSelector((state)=>{
    return state.categary
    
 })
  useEffect(()=>{
        setCategaryvalue(categary)
  },[categary])
   
 return(
    <div>
         <h2>Total Categary={categary.length}</h2>
         {categaryvalue.map((ele)=>{
            return (
               <Eachcategary key={ele._id} {...ele}/>
            )
         })}
    </div>
 )
}
export default Categorylist