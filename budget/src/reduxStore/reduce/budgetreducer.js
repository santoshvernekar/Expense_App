const intialvalue=[]

export const budgetreducer=(state=intialvalue,action)=>{
    
    switch (action.type){
          case "ACCOUNT":{
             return [action.payload]
          }
          case "EDITEBUDGET" :{
            return [action.payload]
          }
          default:{
            return [...state]
          }
    }
}

