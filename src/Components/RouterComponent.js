import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Profile from './Pages/Profile';

function RouterComponent() {
    // `useNavigate` can only appear in a component that is a child
    // component of a `BrowserRouter` element. So, it's all here.
    // 
    let navigate = useNavigate();
    return(
      // The Router is below. Everything within the <Router></Router>
      // tags will change when a Route is clicked. Anything outside
      // will not change (see example below).
      
      <div>
          {/* The below 2 are Button implementations... */}
          <button onClick={() => {navigate("/")}}>Home</button>
          <button onClick={() => {navigate("/about")}}>About</button>
      </div>
    );
}

export default RouterComponent;