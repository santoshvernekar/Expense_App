const intialvalue=[]

const registerreducer=(state=intialvalue,action)=>{
  switch(action.type){
    case "ADD":{
        return [...state,action.payload]
    }
    case "DELETETOKEN":{
      return  intialvalue
    }
   
    default:{
        return [...state]
    }
  }
}
export default registerreducer




