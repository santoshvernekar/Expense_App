import React from "react";
import Home from "./Home";
import Settings from "./Settings";
import Profile from "./Profile";
import { Link ,Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logout } from "../reduxStore/actiongenerator/useraction";
import { useDispatch } from "react-redux";
import Details from "./Details";


const Budget=(props)=>{
    const {handletogal}=props
    const dispatch=useDispatch()
    console.log("1")
    return(
        <div>
            <div>
                <header class="header">
                    <nav class="nav" >
                        <div class="home" >     
                             <h3><Link to="/Settings">Settings</Link></h3>
                        </div>
                        <div  class="home" >
                              {/* <h3><Link to="Profile">Profile</Link></h3> */}
                        </div>
                        <div class="home">
                              <h3><Link to="/">Home</Link></h3>
                        </div>
                       
                        <div class="home">
                              <h3><Link to="Details">Details</Link></h3>
                        </div>
                         <div class="home" >
                         <h3><Link onClick={()=>{
                            alert("log out")
                            dispatch(logout())
                            handletogal()
                            props.history.push("/")
                        }}
                        
                        >Logout</Link></h3> 
                         </div>
                      
                    </nav>
                </header>
            </div>
            
               
             <Route path="/" component={Home} exact={true}/>
             <Route path="/Settings" component={Settings}/>
             <Route path="/Profile" component={Profile} />
             <Route path="/Details" component={Details} />
        </div>
    )
} 
const wrappedcomponent=withRouter(Budget)
export default wrappedcomponent