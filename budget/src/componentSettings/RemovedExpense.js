import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { expenserestore } from "../reduxStore/actiongenerator/expanseaction";
import "../css/table.css"
const RemovedExpense=()=>{

   const dispatch=useDispatch()

    const expences=useSelector((state)=>{
        return state.expanse
    })

    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
    })

    const allexpence=expences.filter((ele)=>{
        return ele.isDelete===true
     })

    const handleRestore=(id)=>{
      
        dispatch(expenserestore(id,token))

    }
    
    return(
        <div class="boederbelove">
        <table>
            <tr>
                <th>Expense</th>
                <th>Amount</th>
            </tr>
            
                {allexpence.map((ele)=>{
                    return <tr>
                        <td>{ele.name}</td>
                        <td>{ele.amount}</td>
                        <button type="button" class="btn btn-success"  onClick={()=>{handleRestore(ele._id)}}>Restore</button>
                    </tr>
                            
                })}
            
        </table>
        </div>
      
    )
}
export default RemovedExpense