// Importing the necessary modules 
import React, { Fragment } from 'react'

// Creating the function based component 
let UsersDiv = (props) => {
    // Rendering the jsx component 
    return (
        <Fragment> 
            {/* Adding the users's component message  */}
            <div className='usersDiv'>
                <section className="usersDivImageSection">
                    <div>
                        <img src={props.imageUrl} alt="" srcset="" />
                    </div>
                </section>

                <section className="usersDivCommentsSection">
                    <div className="usersDivHeaderDisplay">
                        <span> {props.username} </span>
                        <span> {props.status} </span>
                    </div>

                    <div className="usersDivMessage">
                        <span className="spanColor"> {props.message} </span>
                    </div>

                </section>
            </div>
        </Fragment>
    )
}

// Exporting the user's div component 
export default UsersDiv; 