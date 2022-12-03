import {React,useState,useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../css/details.css"


const ComponentToPrint=(props)=>{
    const [expanse,setExpanse]=useState([])
    const [budget ,setBdget]=useState([])
    let result=0
    const token=useSelector((state)=>{
        return state.login[0].token.split(" ")[1]
    })
    useEffect(()=>{
      axios.get("http://localhost:3049/users/budget",{headers:{Authorization :`Bearer ${token}`}}) 
      .then((res)=>{
         setBdget(res.data)
      })
      .catch((e)=>{
        console.log(e)
      })
    axios.get("http://localhost:3049/users/expanse",{headers:{Authorization :`Bearer ${token}`}})
      .then((res)=>{
            setExpanse(res.data)
      })
      .catch((e)=>{
          console.log(e)
      })
    },[])
   
        expanse.forEach((ele)=>{
          result+=ele.amount
        })
    const handleclick=()=>{
      window.print()
    }
    return(
      <div  class="budget" >
          <h2 class="totalbudget">Total Budget ={budget.budget} Rs</h2>
        <table border="2px" id="customers" >
          <thead>
               <tr>
                   <th>Name</th>
                   <th>Amount</th>
               </tr>
          </thead>
          <tbody>
                 {expanse.map((ele)=>{
                    return <tr>
                          <td>{ele.name}</td>
                          <td>{ele.amount}</td>
                         </tr>
                 })}
          </tbody>
        </table>
        <h2 class="totalbudget">Total Expense={result} Rs</h2><br/>
        <button type="button" class="btn btn-warning" onClick={handleclick}>print</button>
      </div>
    )
}

export default ComponentToPrint

