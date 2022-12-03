const intialvalue=[]

const categaryreducer=(state=intialvalue,action)=>{
   switch(action.type){
     case "GETCATEGARY":{
       return [].concat(action.payload)
     }
     case "POSTCATEGARY":{
      return [...state, action.payload]
     }
     case "DELETECATEGARY":{
      return state.filter((ele)=>{
        return ele._id!==action.payload._id
      })
     
     }
     case "PUTCATEGARY" :{
        return state.map((ele)=>{
           if(ele._id===action.payload._id){
             return {...ele,category_name:action.payload.category_name}
           }else{
            return {...ele}
           }
        })
    }
    default:{
        return [...state]
    }
   }
}
export default categaryreducer