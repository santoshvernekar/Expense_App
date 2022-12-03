import React, { useState ,useEffect }  from "react";
import Budgetinfo1 from "./Budgetinfo2";
import { useDispatch } from "react-redux";
import { putbudget } from "../reduxStore/actiongenerator/useraction";



const Budgetinfo=(props)=>{
  const {id,budget,token}=props
   
  const dispatch=useDispatch()

   const callbackfunc=(formdata)=>{
       dispatch(putbudget(id,token,formdata))
      
   }
   console.log("2")
  return(
    <div >
          <Budgetinfo1  callbackfunc={ callbackfunc} budget={budget}/>
    </div>
  )
}
export default Budgetinfo