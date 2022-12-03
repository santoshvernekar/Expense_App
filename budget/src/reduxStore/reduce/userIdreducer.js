const intialid=[]

const userId=(state=intialid,action)=>{
    
    switch (action.type){
        case "ID":{
            return [action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default userId