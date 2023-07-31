// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import freeGiftsLogo from "../../Images/fi_gift.png"; 
import rightArrow from "../../Images/fi_chevron-down.png"; 

// Creating the free gifts component 
let FreeGiftsBtn = (props) => {
    // Render the component 
    return(
        <Fragment> 
            <section className="freeGiftsMainSection">
                <button className="freegiftsAwaitsYou">
                    <div>
                        <img src={freeGiftsLogo} className=""/> 
                    </div>
                    <div>
                        <span> Free Gifts Awaits You </span>
                    </div>
                </button>
                <button className="freegiftsAwaitsYou">
                    <div>
                        <span> Upgrade your account </span>
                    </div>
                    <div>
                        <img src={rightArrow} /> 
                    </div>
                </button>
            </section>
        </Fragment>
    )
}

// Exporting the free gifts component button 
export default FreeGiftsBtn; 