// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import janeDoe from '../../Images/messages/janeDoe.png'; 
import ordersLogo from "../../Images/messages/orders.png"; 
import addLogo from "../../Images/messages/add.png"; 
import emojiLogo from "../../Images/messages/emoji.png"; 
import sendLogo from "../../Images/messages/send.png"; 

// Creating the MessagesDiv component 
class MessagesDiv extends Component {
    // Setting the state 
    state = {} 

    // Rendering the component 
    render() {
        // Return some basic jsx 
        return(
            <Fragment> 
                <div className="messagesDiv">
                    <div className="messagesDivheaderDiv">
                        <header className="messagesDivLeftHeader">
                            <div>
                                <img src={janeDoe} alt="" srcset="" />
                            </div>
                            <div>
                                <div>
                                    <span> Jane Doe </span>
                                </div>
                                <div>
                                    <ul>
                                        <li id="online"> <span className="messagesDivOnline"> Online </span> <span className="timeDisplay"> 12:55am </span></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <header className="messagesDivRightHeader">
                            <div className="newCustomerDiv">
                                <span className="newCustomerPara"> New Customer </span>
                                <span className="viewProfilePara"> View Profile </span>
                            </div>
                            <div className="ordersDiv">
                                <div>
                                    <img src={ordersLogo} className="ordersLogoImage" alt="0 orders" />
                                </div>
                                <div>
                                    <p> 0 Orders </p>
                                </div>
                            </div>

                        </header>
                    </div>

                    {/* Adding the date div  */}
                    <div className="dateDiv">
                        <p> 12 August 2022 </p>
                    </div>

                    {/* Adding the user's Message width: 50% from the left */}
                    <div className="usersMessageDiv">
                        <div className="usersMessageValue">
                            <div>

                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="usersMessageValue">
                            <p> 
                                Hello, I want to make enquires about your product
                            </p>
                            <div className="timeDiv">
                                <span> 12:55am</span>
                            </div>
                        </div>

                    </div>


                    {/* Adding the Admin's Message width: 50% from the right  */}
                    <div className="adminMessageDiv">
                        <div className="adminMessageValue">
                            <p> Hello Janet, thank your for reaching out </p>
                        </div>

                    </div>
                    <div className="adminMessageDiv">
                        <div className="adminMessageValue">
                            What do you need to know ?
                        </div>

                    </div>

                    {/* Adding the date div  */}
                    <div className="dateDiv">
                        <p> Today </p>
                    </div>

                    {/* Adding the user's Message  */}
                    <div className="usersMessageDiv">
                        <div className="usersMessageValue">

                        </div>
                        <div className="usersMessageValue">
                            <p> 
                                I want to know if the price is negtiable, i need about 2 Units
                            </p>
                            <div className="timeDiv">
                                <span> 12:55 am</span>
                            </div>
                            
                        </div>

                    </div>

                    {/* Adding the submit form div */}
                    <section className="inputMessageFormDiv">
                        <div>
                            <img src={addLogo} alt="" />
                        </div>
                        <div>
                            <input className="messageInput" type="text" placeholder='Your message' /> 
                        </div>
                        <div>
                            <img src={emojiLogo} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={sendLogo} alt="" srcset="" />
                        </div>

                    </section>


                </div>

            </Fragment>
        )
    }
}

// Exporting the MessagesDiv 
export default MessagesDiv; 