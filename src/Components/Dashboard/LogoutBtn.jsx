// Importing the necesary modules 
import React, { Component, Fragment } from 'react'; 
import logoutLogo from "../../Images/logout.png"; 


// Creating the logout Logo component 
let LogoutBtn = (props) => {
    // Render the component 
    return(
        <Fragment> 
            <button className='nonActiveButtonDiv logout'>
                <div>
                    <img src={logoutLogo} alt="logoutbutton" />
                </div>
            </button>
        </Fragment>
    )
}

// Exporting the logout button 
export default LogoutBtn; 