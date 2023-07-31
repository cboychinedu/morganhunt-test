// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import Logo from "../../Images/logoWhiteBg.jpg"; 
import menuLogo from "../../Images/messages/menu.png"; 
import shopLogo from "../../Images/messages/shop.png"; 
import usersLogo from "../../Images/messages/users.png"; 
import fileLogo from "../../Images/messages/fileLogo.png"; 
import messageLogo from "../../Images/messages/activeMessageLogo.png"; 
import settingsLogo from "../../Images/messages/settings.png"; 
import headSetLogo from "../../Images/messages/headSet.png"; 
import logoutLogo from "../../Images/messages/logoutLogo.png"; 
import giftLogo from "../../Images/messages/gift.png"; 
import { Link } from 'react-router-dom';

// Creating the left div component 
class LeftDiv extends Component {
    // Setting the state 
    state = {} 

    // Rendering the left Div component 
    render() {
        // Return the left div component 
        return(
            <Fragment> 
                <section className="messageLeftDiv">
                    <div>
                        <img src={Logo} alt="" className="messageLogoImage" srcset="" />
                    </div>

                    {/* Adding the middle section  */}
                    <section className="messageMiddleSection">
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={menuLogo} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={shopLogo} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={usersLogo} alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={fileLogo} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={messageLogo} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={settingsLogo} alt="" />
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Adding the Third  section */}
                    <section className="thirdSection">
                            <div className="messageContents">
                                <Link to="#" className="messageMenuLogo">
                                    <div>
                                        <img src={headSetLogo} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={giftLogo} alt="" />
                                </div>
                            </Link>
                        </div>

                    </section>

                    {/* Adding the bottom section */}
                    <section className="bottomSection">
                        <div className="messageContents">
                            <Link to="#" className="messageMenuLogo">
                                <div>
                                    <img src={logoutLogo} alt="" />
                                </div>
                            </Link>
                        </div>

                    </section>
                

                </section>
            </Fragment>
        )
    }
}

// Exporting the left div component 
export default LeftDiv; 