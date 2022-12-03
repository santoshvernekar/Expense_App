import React,{useState} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { deletecategary } from "../reduxStore/actiongenerator/categaryaction";
import { putcategary } from "../reduxStore/actiongenerator/categaryaction";


const Eachcategary=(props)=>{
  const {_id:id,category_name}=props
   const [categary,setCategary]=useState(category_name)

   const dispatch=useDispatch()

   const token=useSelector((state)=>{
    return state.login[0].token.split(" ")[1]
  })
 
  const handlechange=(e)=>{
    const value=e.target.value
     setCategary(value)
  }
  const editehandle=()=>{
    const body={category_name:categary}

     dispatch(putcategary(id,body,token))
  }
  const deletehandle=()=>{
     dispatch(deletecategary(id,token))
  }

    return(
        <div class="categarylist">
          <div class="innercategarylist">
            <input input="text" onChange={handlechange} value={categary}/>
            <button  type="button" class="btn btn-success"  onClick={editehandle}>Save</button><button type="button" class="btn btn-danger"  onClick={deletehandle}>Delete</button>
          </div>
        
        </div>
    )
}
export default Eachcategary