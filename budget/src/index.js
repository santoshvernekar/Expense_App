import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "./reduxStore/store"
import "../src/css/index.css";


const store=configure()
console.log(store)
console.log(store.getState())
store.subscribe(()=>{
    console.log("state",store.getState())
})

ReactDOM.render(<BrowserRouter><Provider  store={store}><App/></Provider></BrowserRouter>,document.getElementById("root"))
