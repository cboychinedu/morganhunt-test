// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import menuLogo from "../../Images/menu.png";

// Creating the dashboard button component 
let DashboardBtn = (props) => {
    // Render the component 
    return(
        <Fragment> 
            <button className="DashboardBtnDiv">
                <div>
                    <img src={menuLogo} alt="dashboradLogo" />
                </div>
                <div>
                    <span> Dashboard </span>
                </div>
            </button>
        </Fragment>
    )
}

// Exporting the dashboard button 
export default DashboardBtn; 