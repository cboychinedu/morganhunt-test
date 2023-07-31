// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import homeLogo from "../../Images/Logo.jpg";  
import DashboardBtn from './DashboardBtn';
import NonActiveBtn from './NonActiveBtn';
import ordersLogo from "../../Images/orders.png"; 
import customers from "../../Images/customers.png"; 
import inventory from "../../Images/inventory.png"; 
import conversations from "../../Images/conversations.png"; 
import settings from "../../Images/settings.png"; 
import contact from "../../Images/contactLogo.png"; 
import FreeGiftsBtn from "./FreeGiftsBtn"; 
import LogoutBtn from "./LogoutBtn"; 
import ordersNofificationsLogo from "../../Images/orderNoftifications.png";
import convNotificationsLogo from "../../Images/convNotifications.png";  

// Creating the left bar component 
class LeftBar extends Component {
    // Setting the state 
    state = {} 

    // Rendering the left bar component 
    render() {
        // Returning the jsx component 
        return(
            <Fragment> 
                <div className="leftDiv">
                    <div className="imageLogoDiv">
                            <img src={homeLogo} alt="metrix-logo" srcset="" className="metrixLogo" />
                    </div>

                    <div className="menuDiv">
                        {/* Adding the dashboard button */}
                        <DashboardBtn /> 

                        {/* Adding the orders button */}
                        <NonActiveBtn imageUrl={ordersLogo} text="Orders" notificationsLogo={ordersNofificationsLogo}/> 

                        {/* Adding the Customers button */}
                        <NonActiveBtn imageUrl={customers} text="Customers" /> 

                        {/* Adding the Inventory button */}
                        <NonActiveBtn imageUrl={inventory} text="Inventory" /> 

                        {/* Adding the Conversation button */}
                        <NonActiveBtn imageUrl={conversations} text="Conversation" notificationsLogo={convNotificationsLogo}/> 

                        {/* Adding the settings button */}
                        <NonActiveBtn imageUrl={settings} text="Settings" /> 

                        <section className="leftBarMenuSection">
                            <NonActiveBtn imageUrl={contact} text="Contact Support" /> 

                            {/* Adding the free gifts button */}
                            <FreeGiftsBtn /> 

                            {/* Adding the logout button */}
                            <LogoutBtn /> 
                        </section>


                    </div>
                </div>
            </Fragment>
        )
    }
}

// Exporting the LeftBar component 
export default LeftBar; 




