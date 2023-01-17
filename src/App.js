import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ErrorPage from './Components/Pages/ErrorPage';
import Profile from './Components/Pages/Profile';
import RouterComponent from './Components/RouterComponent';

  // This lesson is based on a tutorial which
  // is not on the main React tutorial playlist. This is because
  // this tutorial uses React Router V6 and the methods are
  // different.
  // Link to the tutorial - https://www.youtube.com/watch?v=UjHT_NKR_gU

function App() {

  // I have embeded `RouterComponent` below within 
  // `Router` aka `BrowserRouter` because React Router, 
  // requires that the `useNavigate` hook be used within
  // a `BrowserRouter`. By first rendering a `BrowserRouter`
  // and then a separate custom `RouterComponent` which
  // I programmed and which contained the `useNavigate` hook
  // I satisfy that requirement. 

  // See the StackOverflow discussion about that requirement...
  // https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
  return (
    <div>
      <Router>
        {/* ^^ Highest level components are `BrowserRouter` 
        called `Router` here. */}
        <RouterComponent/>
        <nav>
          {/* The below 3 are Link implementations are are 
          very different from the `useNavigator` ones used in the
          button examples in RouterComponent.js */}
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
      </Router>
      {/* The elements outside of the router will exist independently
      of the pages/components within the router. Very snazzy to know.
      This would be the place that you place a brand banner or a site
      navigation section like a complete item list of all links in 
      a conceptually sensible order. */}
      <p>
        This text will remain regardless of the router page
        selected.
      </p>
    </div>
  );
}

export default App;
