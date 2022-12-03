import React from "react";
import Expanselist from "./Expanselist";
import { postexpance } from "../reduxStore/actiongenerator/expanseaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getexpance } from "../reduxStore/actiongenerator/expanseaction";

const Expanse=(props)=>{
    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
      })
  
   const dispatch=useDispatch()

     
   function callback(data){
       dispatch(postexpance(data,token))
      
   }
 
    return(
        <Expanselist callback={callback} token={token}/>
    )
}
export default Expanse