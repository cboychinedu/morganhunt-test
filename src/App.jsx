// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Dashboard from "./Components/Dashboard/Dashboard"; 
import Messages from "./Components/Messages/Messages"; 
import Home from "./Components/Home/Home"; 
import './App.css';

// Creating the class App component 
class App extends Component {
    // State 
    state = {}

    // Rendering the component 
    render() {
      // Return the jsx 
      return(
        <Fragment> 
          <BrowserRouter>
             {/* Setting the routes configurations  */}
             <Routes> 
                <Route exact path="/" element={<Home />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path="/messages" element={<Messages />} /> 
             </Routes>
          </BrowserRouter>
        </Fragment>
      )
    }
}

// Exporting the component App 
export default App;
