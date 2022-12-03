import React  from "react";
import Piechart from "../componentHome.js/Piechart";
import Expanse from "../componentHome.js/Expanse"

const Home=(props)=>{

    return(
        <div class="budget">
             <div class="paichart">
            <Piechart/> 
            </div>
             <Expanse/>
        </div>
   

     
    )
}
export default Home