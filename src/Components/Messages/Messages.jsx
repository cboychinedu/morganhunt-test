// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';

// Creating Dashboard component 
class Messages extends Component {
    // Setting the state 
    state = {} 

    // Rendering the dasboard component 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                <section className="messageMainSection">
                    <LeftDiv /> 
                    <RightDiv /> 
                </section>

            </Fragment>
        )
    }
}

// Exporting the Messages component 
export default Messages; 