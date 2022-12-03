import axios from "axios"

export const getcategary=(token)=>{

    return((dispatch)=>{
         axios.get(`http://localhost:3049/users/category`,{headers:{Authorization :`Bearer ${token}`}})
         .then((responce)=>{
              console.log(responce.data,"ddd")
              dispatch({type:"GETCATEGARY",payload:responce.data})
         })
         .catch((erroe)=>{
             console.log(erroe)
         })
    })
}

export const postcategary=(token,data)=>{

    return((dispatch)=>{
        axios.post(`http://localhost:3049/users/category`,data,{headers:{Authorization :`Bearer ${token}`}}) 
        .then((responce)=>{
            dispatch({type:"POSTCATEGARY",payload:responce.data})
        })
        .catch((erroe)=>{
            console.log(erroe)
        })
    })
}
export const  deletecategary=(id,token)=>{
      console.log(id,token)
   return((dispatch)=>{
    axios.delete(`http://localhost:3049/users/category/${id}`,{headers:{Authorization :`Bearer ${token}`}}) 
    .then((responce)=>{
        console.log(responce.data)
       dispatch({type:"DELETECATEGARY",payload:responce.data})
    })
    .catch((erroe)=>{
        console.log(erroe)
   })
  }) 
        
}
export const putcategary=(id,body,token)=>{
    return((dispatch)=>{  
    axios.put(`http://localhost:3049/users/category/${id}`,body,{headers:{Authorization :`Bearer ${token}`}}) 
    .then((responce)=>{
         console.log(responce.data,"dddddddddddddddddddddddddddddddddddddddddddddddddd")
       dispatch({type:"PUTCATEGARY",payload:responce.data})
    })
    .catch((erroe)=>{
        console.log(erroe)
   })
    })
}