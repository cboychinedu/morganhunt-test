// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import Header from './HeaderDiv';
import SalesComponent from './SalesComponent';
import SecondMainDashboard from "./DashboardMainDiv"; 

// Creating the right bar component 
class RightBar extends Component {
    // Setting the state 
    state = {} 

    // Rendering the right bar component 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                <div className="rightDiv">
                    {/* Adding the header div  */}
                    <Header /> 

                    {/* Adding the sales component div  */}
                    <SalesComponent /> 

                    {/* Adding the main div */}
                    <SecondMainDashboard /> 


                </div>
            </Fragment>
        )
    }
}

// Exporting the RightBar component 
export default RightBar; 