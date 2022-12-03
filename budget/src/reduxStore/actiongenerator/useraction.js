import axios from "axios";


export const registeraction=(formdata)=>{
     return((dispatch)=>{
          axios.post('http://localhost:3049/users/register',formdata)
           .then((res)=>{
              
               dispatch({type:"ADD",  payload: res.data})
           })
           .catch(()=>{

           })
      
     })
}

export const loginaction=(formdata)=>{
     return((dispatch)=>{
       axios.post('http://localhost:3049/users/login',formdata)
       .then((res)=>{
             dispatch({type:"LOGIN",payload:res.data})
       })
       .catch(()=>{

       })
     })
}
export const userId=(id)=>{
     return{
          type:"ID",
          payload:id
     }
}
export const logout=()=>{

     return((dispatch)=>{
          dispatch({type:"DELETETOKEN"})
     })
}

export const  getbudget =(token)=>{
    
     return((dispatch)=>{
          axios.get("http://localhost:3049/users/budget",{headers:{Authorization :`Bearer ${token}`}})
            .then((responce)=>{
                dispatch({type:"ACCOUNT",payload:responce.data})
            })
            .catch((erroe)=>{
                 console.log(erroe)
            })
     })
}

export const putbudget=(id,token,data)=>{
    
     return((dispatch)=>{
        axios.put(`http://localhost:3049/users/budget/${id}`,data,{headers:{Authorization :`Bearer ${token}`}})
        .then((responce)=>{
       
           dispatch({type:"EDITEBUDGET",payload:responce.data})
       })
       .catch((erroe)=>{
            console.log(erroe)
       })
     })
}