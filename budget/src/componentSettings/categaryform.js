import React,{useState} from "react";
import { useSelector } from "react-redux";
import "../css/category.css"



const Categaryform=(props)=>{
    const {formdatacall}=props
     const [categary,setCategary]=useState("")

    const getuserid=useSelector((state)=>{
            return state.userId.toString()
     })
     
    const handlechange=(e)=>{
    setCategary(e.target.value)
    } 

    const handlesubmit=()=>{
        const formdata={
            category_name:categary,
            userId:getuserid
        }
        formdatacall(formdata)
    }

    return(
        <div class="categoryform">
            <div class="form">
                    <label>Categary</label>
                        <input type="text" value={categary} onChange={handlechange}/> 
                        <button onClick={handlesubmit}>Save</button>
            </div>
                
        </div>
    )
}
export default Categaryform