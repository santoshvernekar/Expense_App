import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import registerreducer from './reduce/registerreducer';
import loginreducer from './reduce/loginreducer';
import { budgetreducer } from './reduce/budgetreducer';
import categaryreducer from './reduce/categoryreducer';
import userId from './reduce/userIdreducer';
import expansereducer from './reduce/expancereducer';

const configure=()=>{
    const store=createStore(combineReducers({
        register:registerreducer,
        login:loginreducer,
        userId:userId,
        budget:budgetreducer,
        categary:categaryreducer,
        expanse:expansereducer
  }),applyMiddleware(thunk))
  return store
}

export default configure