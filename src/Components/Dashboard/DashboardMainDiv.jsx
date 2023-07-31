// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import folderLogo from "../../Images/folderLogo.png"; 
import marketLoader from "../../Images/markettingLogo.png"; 
import dropDownArrow from "../../Images/down.png"; 
import cart from "../../Images/cart.png"; 
import iphoneLogo from "../../Images/iphoneLogo.png"; 
import iphoneBlackLogo from "../../Images/iphoneDarkLogo.png"
import summaryLogo from "../../Images/graphBar.png"; 
import salesLogo from "../../Images/salesLogo.png"; 


// Creating the main dashboard component 
class SecondMainDashboard extends Component {
    // Setting the state 
    state = {} 

    // Rendering the main dashboard component 
    render() {
        // Return the jsx component 
        return (
            <Fragment> 
                <div className="mainDashboardDiv">
                    {/* Adding the left dashboard */}
                    <div className="leftMainDashboard">

                        {/* Adding the right dashboard */}
                        <div className="rightMainDashboard"> 
                            <section className="summaryAndSalesDiv">
                                <div className="salesSummary">
                                    <span> Summary </span>
                                </div>
                                <div className="salesDiv">
                                    <div>
                                        <img src={salesLogo} alt="" />
                                    </div>
                                </div>
                                <section> 
                                <div style={{display: "flex"}}>
                                    <span> Last 7 days </span>
                                    <div>
                                        <img src={dropDownArrow} alt="" srcset="" />
                                    </div>
                                </div>
                            </section>
                            </section>


                            <section>
                                <img src={summaryLogo} alt="" srcset="" className="summaryLogoImage" />
                            </section>
                        </div>

                        <section className="MarkettingDashboardDiv">
                            <div className="MarketDiv">
                                <div className="markettingParaDiv">
                                    <section>
                                        <p> Marketting </p>
                                    </section>
                                    <section className="markettingDownArrowDiv">
                                        <div>
                                            <p> This Week </p>
                                        </div>
                                        <div>
                                            <img src={dropDownArrow} alt="" />
                                        </div>
                                    </section>
                        

                                </div>
                                <div>
                                    <section>
                                        <ul className="horizontalList">
                                            <li className="acquistion"> Acquistion </li>
                                            <li className="purchase"> Purchase </li>
                                            <li className="retention"> Retention </li>
                                        </ul>
                                    </section>

                                </div>
                                <div className="loaderDiv">
                                    <div className="marketLoaderImageDiv">
                                        <img src={marketLoader} alt="" />
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className="middleDashboard">
                            {/* Adding the all products*/}
                            <div className="allProductSalesContainerDiv">
                                <div className="innerSalesContainerDiv">
                                    <div>
                                        <img src={folderLogo} alt="folderLogo" />
                                    </div>

                                </div>
                                <div className="salesNumbersDiv">
                                    <div className="salesNumbers">
                                        <span className="allProductsText"> All Products </span> <br />
                                        <span className="amount allProductsText"> 45 </span>
                                    
                                    </div>
                                    <div className="salesNumbersVolume">
                                        <span className="allProductsText"> Active </span> <br />
                                        <span className="volume allProductsText"> 32 <span className="allProductsText"> +24% </span></span>
                                    
                                    </div>
                                </div>

                            </div>

                            {/* Adding the abandoned cart  */}
                            <div className="salesContainerDiv">
                            <div className="innerSalesContainerDiv">
                                    <div>
                                        <img src={cart} alt="" />
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

                        </section>
                        <section className="recentOrders">
                            <div className="recentOrdersHeader">
                                <p> Recent Orders </p> <br/>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="pending"> Pending </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneBlackLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="completed"> Completed </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="completed"> Completed </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneBlackLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="pending"> Pending </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="completed"> Completed </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneBlackLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="pending"> Pending </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="completed"> Completed </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneBlackLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="pending"> Pending </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="completed"> Completed </p>
                                </div>
                            </div>
                            <div className="recentOrdersItems">
                                <div>
                                    <img src={iphoneBlackLogo} alt="" srcset="" />
                                </div>
                                <div className="phonePriceDiv">
                                    <p> iphone 13 </p> <br/>
                                    <p> N730,000.00 x 1</p>
                                </div>
                                <div className="phonePriceDiv">
                                    <p> 12 Sept 2022 </p> <br /> 
                                    <p className="pending"> Pending </p>
                                </div>
                            </div>

                        </section>
                        
                    </div>

                </div>

            </Fragment>
        )
    }
}

// exporting the main dashboard div 
export default SecondMainDashboard;  