import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Profile from './Pages/Profile';

// This Router branch is based on this tutorial which
// is not on the main React tutorial playlist. This is because
// this tutorial uses React Router V6.
// Link - https://www.youtube.com/watch?v=UjHT_NKR_gU

function RouterComponent() {
    let navigate = useNavigate();
    return(
      // The Router is below. Everything within the <Router></Router>
      // tags will change when a Route is clicked. Anything outside
      // will not change (see example below).
      
      <div>
          <button onClick={() => {navigate("/")}}>Home</button>
          <button onClick={() => {navigate("/about")}}>About</button>
          <nav>
            
            <Link to="/"> Home </Link> 
            <a>|</a>
            <Link to="/about"> About </Link> 
            <a>|</a><br></br>
            <Link to="/profile"> Profile </Link><a> -- requires "/username"</a>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* This route accepts an additional parameter
            `username` */}
            <Route path="/profile/:username" element={<Profile/>}/>
            {/* The last route should be the error page. */}
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        {/* Things outside of the <Router> tags won't change... */}
        <div>This part doesn't change.</div>
      </div>
    );
}

export default RouterComponent;