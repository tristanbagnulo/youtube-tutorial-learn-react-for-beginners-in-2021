import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, RouterProvider } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ErrorPage from './Components/Pages/ErrorPage';
import Profile from './Components/Pages/Profile'
import RouterComponent from './Components/RouterComponent'


function App() {

  return (
    <Router>
      <RouterComponent/>
    </Router>
  );
}

export default App;
