// Importing the necesssary modules 
import React, { Component, Fragment } from 'react'; 
import searchLogo from "../../Images/messages/Search.png"; 
import UsersDiv from './usersDiv';
import NonActiveUsersDiv from "./nonActiveUserDiv"; 
import janeDoe from "../../Images/messages/janeDoe.png"; 


// Creating the MainContactsMessagesDiv class component 
class MainContactsMessagesDiv extends Component {
    // Setting the state 
    state = {} 

    // Rendering the component 
    render() {
        // Return some basic jsx 
        return(
            <Fragment> 
                <section className="mainContactsDiv">
                    <div className="">
                        <section className="contactsHeaderSection">
                            <div className="contactsDiv"> 
                                <div>
                                    <h4> Contacts </h4> 
                                </div>
                                <div>
                                    <h4> 34 </h4>
                                </div>
                            </div>
                            
                            {/* Adding the search div  */}
                            <div className="searchDiv">
                                <div>
                                    <img src={searchLogo} alt="" className="searchLogo" />
                                </div>
                                <div>
                                    <input type="search" name="" id="" className="searchInputForm" placeholder="Search " />
                                </div>
                                
                            </div>

                        </section>


                        {/* Adding the user's div component */}
                        <UsersDiv 
                            imageUrl={janeDoe} 
                            username="Jane Doe" 
                            status="New"
                            message="Hi, i want to make enquires about yo..." 
                        />
                        <NonActiveUsersDiv 
                            imageUrl={janeDoe} 
                            username="Jane Doe" 
                            status="New"
                            message="Hi, i want to make enquires about yo..." 
                        />
                        <NonActiveUsersDiv 
                            imageUrl={janeDoe} 
                            username="Jane Doe" 
                            status="New"
                            message="Hi, i want to make enquires about yo..." 
                        />


                    </div>
                    <div className="messagesDiv">

                    </div>
                </section>
            </Fragment>
        )
    }
}

// Exporting the MainContactsMessagesDiv component 
export default MainContactsMessagesDiv; 