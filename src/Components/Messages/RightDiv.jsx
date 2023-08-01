// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import MainContactsMessagesDiv from './MainContactsMessagesDiv';
import Header from './HeaderDiv';

// Creating the left div component 
class RightDiv extends Component {
    // Setting the state 
    state = {} 

    // Rendering the left Div component 
    render() {
        // Return the left div component 
        return(
            <Fragment> 
                <section className="messageRightDiv"> 
                    {/* Adding the header */}
                    <Header /> 

                    <section className="contentsSectionMain">
                        {/* Adding the Header Para  */}
                        <div className="headerPara">
                            <div>
                                <h3 className="conversationWithCustomersHeader"> Conversations with Customers </h3>
                            </div>

                            <div>
                                <button className="newMessageBtn"> New Message </button>
                            </div>
                            
                        </div>

                        {/* Adding the the mainContacts Div */}
                        <MainContactsMessagesDiv /> 

                    </section>


                </section>
            </Fragment>
        )
    }
}

// Exporting the left div component 
export default RightDiv; 