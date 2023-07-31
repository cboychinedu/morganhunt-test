// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import downArrow from "../../Images/down.png"; 
import notifications from "../../Images/notifications.png"; 
import profilePic from "../../Images/profilePic.png"; 
import homeLogo from "../../Images/home.png"; 

// Creating the header component 
let Header = (props) => {
    // Rendering the component 
    return(
        <Fragment>  
            <div className="headerDiv">
                <header className="headerDivHeader">
                    <div className="dashboardHeader">
                        <div className='dashboardDisplayNameDiv'>
                            <span> Dashboard </span>
                        </div>
                        <div className="nannyShopOutterDiv">
                            <button className="nannyShop">
                                <div>
                                   <span> Nanny's Shop </span>
                                </div>
                                
                                <div>
                                    <img src={downArrow} alt="" />
                                </div>
                            </button>
                            <div className="notifications">
                                <img src={notifications} alt="" />
                            </div>
                            <div className="userLogo">
                                <img src={profilePic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="home">
                        <div>
                            <img src={homeLogo} className="homeLogo" alt="" srcset="" />
                        </div>
                    </div>

                </header>
            </div>
        </Fragment>
    )
}

// Exporting the header div 
export default Header; 
 
 
