// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import RightBar from "./RightBar"; 
import LeftBar from "./LeftBar"; 

// Creating Dashboard component 
class Dashboard extends Component {
    // Setting the state 
    state = {} 

    // Rendering the dasboard component 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                <section className="mainDiv">
                    {/* Adding the left bar */}
                    <LeftBar/>

                    {/* Adding the right bar */}
                    <RightBar /> 


                </section>

            </Fragment>
        )
    }
}

// Exporting the Dashboard component 
export default Dashboard; 