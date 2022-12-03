import React from "react";
import Categaryform from "./categaryform";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postcategary } from "../reduxStore/actiongenerator/categaryaction";
import { getcategary } from "../reduxStore/actiongenerator/categaryaction";


const Categary=(props)=>{
    
    const dispatch=useDispatch()

    const token=useSelector((state)=>{
      return state.login[0].token.split(" ")[1]
    })
    
    const formdatacall=(data)=>{
        dispatch(postcategary(token,data))
        
    }

    return(
        <div>
            <Categaryform formdatacall={formdatacall}/>
        </div>
    )
}
export default Categary