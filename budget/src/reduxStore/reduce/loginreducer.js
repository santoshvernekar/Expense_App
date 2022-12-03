const intialvalue=[]
const loginreducer=(state=intialvalue,action)=>{
    switch(action.type){
      case "LOGIN":{
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
export default loginreducer
