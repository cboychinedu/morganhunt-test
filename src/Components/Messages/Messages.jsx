// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import Header from './HeaderDiv';

// Creating Dashboard component 
class Messages extends Component {
    // Setting the state 
    state = {} 

    // Rendering the dasboard component 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                <Header /> 

            </Fragment>
        )
    }
}

// Exporting the Messages component 
export default Messages; 