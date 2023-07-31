// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import Dashboard from "../../Images/dashboardDIsplayLogo.png"; 
import MessageLogo from "../../Images/messagesLogo.png"; 
import { Link } from 'react-router-dom';



// Creating the Home component 
class Home extends Component {
    // Setting the state 
    state = {} 

    // Rendering the Home component 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                <div className="homeContainer"> </div>
                <div className="backgroundText">
                    <Link to="/dashboard" className="homeDashboard">
                        <div>
                            <img src={Dashboard} alt="" srcset="" className="homeDashboard"/>
                        </div>
                        <div>
                            <p> Dashboard </p>
                        </div>
                    </Link>

                    <Link to="/messages" className="homeMessages">
                        <div>
                            <img src={MessageLogo} alt="" className="homeMessages" srcset="" />
                        </div>
                        <div>
                            <p> Messages </p>
                        </div>
                    </Link>

                </div>
                {/* <div className="homeContainer">


                </div> */}
            </Fragment>
        )
    }
}

// Exporting the Home component 
export default Home; 