
import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import Exapanseeach from "./Expanseeach";
import { useDispatch } from "react-redux";
import { getexpance } from "../reduxStore/actiongenerator/expanseaction";
import "../css/piechart.css"
import Pagination from "./Pagination";
import RemovedExpense from "../componentSettings/RemovedExpense";
const Expanselist=(props)=>{

    const {callback,token}=props
    const [id,setId]=useState("")
    const [expanse ,setExpanse]=useState("")
    const [amount,setamount]=useState("")
    const [filtervalue,setFiltervalue]=useState("")
    const [togal,setTogal]=useState(false)
    const [post ,setPost]=useState([])
    const [currentpage ,setCurrentpage]=useState(1)
    const [postperpage ,setPostperpage]=useState(4)
      
    const lastPostindex=currentpage*postperpage
 
    const dispatch=useDispatch()

    const categary=useSelector((state)=>{
           return state.categary
    })

    const userId=useSelector((state)=>{
        return state.userId.toString()
   })

   let expanses1=useSelector((state)=>{
    return state.expanse
    })
    const expanses=expanses1.filter((ele)=>{
       return ele.isDelete===false
    })
    
    useEffect(()=>{
        dispatch(getexpance(token))
    },[])
      
    const handleselect=(e)=>{
        const value=e.target.value
        setId(value)
    }
  
      const handlechangename=(e)=>{
      const value=e.target.value
       setExpanse(value)
    }
  
    const handlechangeammount=(e)=>{
          const value=e.target.value
          setamount(value)
    }

    const handleSearch=(e)=>{
          setFiltervalue(e.target.value)
    }
  
    const result= expanses.filter((ele)=>{
        return ele.name.toLowerCase().includes(filtervalue.toLocaleLowerCase())
    })
  
    const firstPostindex=lastPostindex-postperpage

    const slicedata=result.slice(firstPostindex ,lastPostindex)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const formdata={
            name:expanse,
            amount:amount,
            categoryId:id,
            userId:userId
        }
        callback(formdata)

        setId("")
        setExpanse("")
        setamount("")

    }
    
    
    return(
        <div class="expanxeform">
            <form onSubmit={handlesubmit}>
                <div class="expanseforminner">
                    <label>Category</label><br/>
                    <select value={id} onChange={handleselect}>
                        <option >select</option>
                        {categary.map((ele)=>{
                            return (
                                <option value={ele._id}>{ele.category_name}</option>
                            )
                        })}
                    </select><br/>
                      
                
                    <label>Expense name</label><br></br>
                    <input type="text" value={expanse} onChange={handlechangename}placeholder="Exapanse name"/>
                    <label>Amount</label><br></br>
                    <input type="Number" value={amount} placeholder="Amount" onChange={handlechangeammount} />
                    <input  class="btn btn-success" type="submit" value="Add" />
                </div>
            </form>
            <div class="search">
                <input type="text" value={filtervalue} onChange={handleSearch} placeholder="Search by expense name"/>
            </div>
            <table border="2px" id="customers"  >
                <tr>
                    <th>Expence</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
                {slicedata.map((ele)=>{
                    return <tr>
                            <td>{ele.name}</td>
                            <td>{ele.amount}</td>
                            <Exapanseeach {...ele}/>
                         
                    </tr>
                })}
             </table>

            {/* {result.map((ele)=>{
                return(
                    <Exapanseeach name={ele.name} amount={ele.amount} categoryId={ele.categoryId} updatedAt={ele.updatedAt} _id={ele._id}
                    />
                )
            })} */}
            <Pagination totalpost={result.length} postperpage={postperpage} setCurrentpage={setCurrentpage}/>

            <RemovedExpense/>
        </div>
    )
}
export default Expanselist