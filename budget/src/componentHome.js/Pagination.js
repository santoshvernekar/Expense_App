import React from "react";
import "../css/piechart.css"


const Pagination=({totalpost,postperpage,setCurrentpage})=>{
 let pages=[]
  for(let i=1 ; i<=Math.ceil(totalpost/postperpage);i++){
     pages.push(i)
  }
  
  return(
    <div class="paginationbutton">
        {pages.map((ele,i)=>{
            return <button class="button" key={i}  onClick={()=>setCurrentpage(ele)} type="button" class="btn btn-secondary">{ele}</button>
        })}

        
    </div>
  )
}
export default Pagination 