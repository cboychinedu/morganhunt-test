// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 


// Creating the nonActive button component 
let NonActiveBtn = (props) => {
    // Render the component 
    return (
        <Fragment> 
            <button className="nonActiveButtonDiv">
                <div>
                    <img src={props.imageUrl} /> 
                </div>
                <div>
                    <span> {props.text}</span>
                </div>
                <div className="notificationsLogo">
                    <img src={props.notificationsLogo} alt="" />
                </div>
            </button>
        </Fragment>
    )
}

// Exporting the NonActive Btn 
export default NonActiveBtn;