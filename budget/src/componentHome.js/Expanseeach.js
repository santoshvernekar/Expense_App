import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteexpance ,expanseedite, expenseremove } from "../reduxStore/actiongenerator/expanseaction";
import swal from 'sweetalert';


const Exapanseeach=(props)=>{
   const {name,_id,categoryId,amount,createdAt}=props
   const [nameform,setNameform]=useState(name)
   const [amountform, setamountform]=useState(amount)

       const dispatch=useDispatch()

    const categaryName=useSelector((state)=>{
        return state.categary 
    })

    const result=categaryName.filter((ele)=>{
        return ele._id===categoryId
    })


    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
      })

    const handlechange1=(e)=>{
      setNameform(e.target.value)
    }
    const handlechange2=(e)=>{
      setamountform(e.target.value)
    }
    const handledelete=()=>{
     
        dispatch(deleteexpance(_id,token))
    }
    const handleedite=()=>{
        const formdata={
            name:nameform,
           amount:Number(amountform)
        }
        console.log(formdata,"edite")
        dispatch(expanseedite(_id,formdata,token))
    }
    const handleshow=()=>{
        swal(`CreatedAt ${createdAt}  
                  Category ${result[0].category_name}`)
    }
    const handleremove=()=>{
       dispatch(expenseremove(_id,token)) 
    }

    return(
        <div>
           {/* <input placeholder="expanse" value={nameform}  onChange={handlechange1} />
           <input placeholder="Amount" value={amountform} onChange={handlechange2} /> */}
              {/* <button type="button" class="btn btn-success" onClick={handleedite}>Save</button> */}
           <button  type="button" class="btn btn-danger" onClick={()=>{handledelete(_id)}}>Delete</button>
           <button type="button" class="btn btn-info" onClick={handleshow}>Details</button>
           <button type="button" class="btn btn-warning" onClick={handleremove}>Remove</button>
        </div>
    )
}
export default Exapanseeach