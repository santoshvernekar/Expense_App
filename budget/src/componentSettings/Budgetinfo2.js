import React,{useEffect,useState}  from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getbudget } from "../reduxStore/actiongenerator/useraction";
import "../css/budget.css"


const Budgetinfo1=(props)=>{
    const {callbackfunc,budget}=props
  const [Budget,setBudget]=useState(budget?budget:"")

    const dispatch=useDispatch()
    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
      })

//  useEffect(()=>{
//       dispatch(getbudget(token))
//  },[Budget])
 const handlechange=(e)=>{
   setBudget(e.target.value)
 }

 const handlesubmit1=(e)=>{
    e.preventDefault()
    const formdata={
        budget:Number(Budget)
    }
  callbackfunc(formdata)
    setBudget("")
 } 
 console.log("3")
    return(
        <div class="budgetform">
          <div class="budgetdisplay">
               <h1>Total Budget ={budget} Rs</h1>
          </div>
           
            <form onSubmit={handlesubmit1}>
                <label>Budget</label><input type="text" value={Budget} onChange={handlechange} name="Budget"/><input type="submit" />
                <p></p>
            </form>
         
        </div>
       
    )
}
export default Budgetinfo1