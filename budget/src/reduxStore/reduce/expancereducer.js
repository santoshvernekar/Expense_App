
const intialexpanse=[]

const expansereducer=(state=intialexpanse,action)=>{
 
   switch (action.type){
    case "getexpance":{
        return  intialexpanse.concat(action.payload)
    }
    case "postexpance":{
        return [...state,action.payload]
    }
    case "deletexpance":{
        const result = state.filter((ele)=>{
            return ele._id !== action.payload._id
        })
        return result
    }
    case "editeexpance":{
        return state.map((ele)=>{
            if(ele._id===action.payload._id){
                return {...ele,name:action.payload.name,amount:action.payload.amount}
            }else{
                return{...ele}
            }
        })
    }
    case "EXPENSEREMOVE":{
        return state.map((ele)=>{
            if(ele._id===action.payload._id){
                return {...ele,isDelete:action.payload.isDelete }
            }else{
                return{...ele}
            }
        })
    }
    case "EXPENSERESTORE":{
        return state.map((ele)=>{
            if(ele._id===action.payload._id){
                return {...ele,isDelete:action.payload.isDelete }
            }else{
                return{...ele}
            }
        })
    }
    default:{
        return [...state]
    }
   }
}
export default expansereducer