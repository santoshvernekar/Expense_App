import axios from "axios"

export const postexpance=(body,token)=>{
    return((dispatch)=>{
        axios.post(`http://localhost:3049/users/expanse`,body,{headers:{Authorization :`Bearer ${token}`}})
          .then((res)=>{
            dispatch({type:"postexpance" ,payload:res.data})
          })
          .catch((error)=>{
                console.log(error)
          })
    })
}

export const getexpance=(token)=>{
  return((dispatch)=>{
    axios.get(`http://localhost:3049/users/expanse`,{headers:{Authorization :`Bearer ${token}`}})
      .then((res)=>{
     
        dispatch({type:"getexpance" ,payload:res.data})
      })
      .catch((error)=>{
            console.log(error)
      })
})
}

export const deleteexpance=(id,token)=>{
       return((dispatch)=>{
          axios.delete(`http://localhost:3049/users/expanse/${id}`,{headers:{Authorization :`Bearer ${token}`}})
          .then((res)=>{
               console.log(res.data._id,"eleledddddddddddddd")
               console.log(res.data,"dddddddddd")
            dispatch({type:"deletexpance" ,payload:res.data})
          })
          .catch((error)=>{
                console.log(error)
          })
       })
}

export const expanseedite=(id,body,token)=>{
  return((dispatch)=>{
    axios.put(`http://localhost:3049/users/expanse/update/${id}`,body,{headers:{Authorization :`Bearer ${token}`}})
    .then((res)=>{
         console.log(res.data,"elele")
      dispatch({type:"editeexpance" ,payload:res.data})
    })
    .catch((error)=>{
          console.log(error)
    })
  })
}

export const expenseremove=(id,token)=>{
     console.log(id,token)
  return((dispatch)=>{
    axios.get(`http://localhost:3049/users/soft/expanse/${id}`,{headers:{Authorization :`Bearer ${token}`}})
          .then((res)=>{
        
        dispatch({type:"EXPENSEREMOVE" ,payload:res.data})
      })
        .catch((error)=>{
              console.log(error)
        })
    })
}

export const expenserestore=(id,token)=>{
  console.log(id,token,"tttttttttttttttttttttttt")
return((dispatch)=>{
 axios.get(`http://localhost:3049/users/expanse/restore/${id}`,{headers:{Authorization :`Bearer ${token}`}})
       .then((res)=>{
     
     dispatch({type: "EXPENSERESTORE",payload:res.data})
   })
     .catch((error)=>{
           console.log(error)
     })
 })
}