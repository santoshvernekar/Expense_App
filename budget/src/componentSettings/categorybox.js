import React,{useEffect} from "react";
import Categorylist from "./Categorylist";
import { useDispatch, useSelector } from "react-redux";
import { getcategary } from "../reduxStore/actiongenerator/categaryaction";


const Categarybox=(props)=>{
    const dispatch=useDispatch()
    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
      })
      useEffect(()=>{
          dispatch(getcategary(token))
      },[])
    return(
        <div>
            <Categorylist token={token}/>
        </div>
    )
}
export default Categarybox