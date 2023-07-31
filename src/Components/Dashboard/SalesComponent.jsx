// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import sales from "../../Images/sales.png";
import customers from "../../Images/customersLogo.png"; 
import downArrow from "../../Images/down.png";  
import orderLogo from "../../Images/orderLogo.png"; 

// Creagint the sales component 
let SalesComponent = (props) => {
    // Render the component 
    return(
        <Fragment> 
            <section className="salesSection">
                {/* Adding the first sales property */}
                <div className="salesContainerDiv">
                    <div className="innerSalesContainerDiv">
                        <div>
                            <img src={sales} alt="" />
                        </div>

                        <div className="thisWeekDiv">
                            <span> This Week </span>
                            <img src={downArrow} alt="" />
                        </div>

                    </div>
                    <div className="salesNumbersDiv">
                        <div className="salesNumbers">
                            <span> Sales </span> <br />
                            <span className="amount">₦ 4,000,000.0.0 </span>
                          
                        </div>
                        <div className="salesNumbersVolume">
                            <span> Volume </span> <br />
                            <span className="volume"> 450 <span className="percent"> +20.00% </span></span>
                           
                        </div>
                    </div>

                </div>

                {/* Adding the second sales property */}
                <div className="salesContainerDiv">
                    <div className="innerSalesContainerDiv">
                        <div>
                            <img src={customers} alt="" />
                        </div>

                        <div className="thisWeekDiv">
                            <span> This Week </span>
                            <img src={downArrow} alt="" />
                        </div>

                    </div>
                    <div className="salesNumbersDiv">
                        <div className="salesNumbers">
                            <span> Customers </span> <br />
                            <span className="amount"> 1,250 <span className="percent"> +15.80% </span> </span>
                          
                        </div>
                        <div className="salesNumbersVolume">
                            <span> Active </span> <br />
                            <span className="volume"> 1,180 <span className="percent"> 85% </span></span>
                           
                        </div>
                    </div>

                </div>

                {/* Adding the third sales property  */}
                <div className="salesContainerDiv">
                    <div className="innerSalesContainerDiv">
                        <div>
                            <img src={orderLogo} alt="" />
                        </div>

                        <div className="thisWeekDiv">
                            <span> This Week </span>
                            <img src={downArrow} alt="" />
                        </div>

                    </div>
                    <div className="salesNumbersDiv">
                        <div className="salesNumbers">
                            <span> All Orders </span> <br />
                            <span className="amount"> 450 </span>
                        </div>
                        <div className="salesNumbersVolume">
                            <span> Pending </span> <br />
                            <span className="volume"> 5 </span>
                           
                        </div>
                        <div className="salesNumbersVolume">
                            <span> Completed </span> <br />
                            <span className="volume"> 1,180 </span>
                           
                        </div>
                    </div>

                </div>
            </section>
            
        </Fragment>
    )
}

// Exporting the sales Component 
export default SalesComponent; 