import React from "react";
import Charts from "./Charts";
import Charts1 from "./Charts1";
import { useSelector } from "react-redux";

const Piechart=(props)=>{
 const budget=useSelector((state)=>{
    return state.budget[0].budget
 })
 const totalexpences=useSelector((state)=>{
    return state.expanse
 })
 const allexpence=totalexpences.filter((ele)=>{
   return ele.isDelete===false
})
    let sum=0
    allexpence.map((ele)=>{
       sum+=ele.amount
    })
   const allcategary=useSelector((state)=>{
        return state.categary

   })
  

   const groupByMake = (allexpence = []) => {
        let result = [] , val=[]
        result = allexpence.reduce((r, a) => {
           r[a.categoryId] = r[a.categoryId] || [];
           r[a.categoryId].push(a);
           return r;
        }, {});
      
        for(let key in result){
         if(!val.hasOwnProperty(key)){
          let data=new Object({
             id:key,
             sum:0
          })
           val.push(data)
         }
         result[key].forEach((ele)=>{
               val.forEach((obj)=>{
                  if(ele.categoryId===obj.id){
                     obj.sum+=ele.amount
                  }
               })
        })
      
      }
       allcategary.forEach((ele)=>{
            val.forEach((elee)=>{
               if(ele._id===elee.id){
                  elee.catname=ele.category_name
               }
            }) 
       })
       let data=[["expances", "Amount in Rupees"]]
       val.forEach((ele)=>{
           data.push([ele.catname ,ele.sum])
       })
       return data
   };

    let expanseall= groupByMake(allexpence)
    
   
   
    
    return(
        <div class="paichart" >
            <Charts sum={sum} budget={budget}/> 
            <Charts1 expanseall={expanseall} />
        </div>
       
    )
}
export default Piechart