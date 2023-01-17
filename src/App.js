import './App.css';
import Counter from "./Components/Counter"
import TodoList from "./Components/TodoList"
import React, {useState, useEffect} from "react";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  //There are two important main lessons in Lesson 9.
  //We show the full lifecycle of React components in 
  //lesson 1 where we show the 3 different types of 
  // useEffect implementations which have functions run
  //at the different stages of a Coutner component;
  // Mounting, Updating, Unmounting.

  //In lesson two we learn how to make an API request
  //within a useEffect function when a TodoList component
  //is rendered for the first time only (no need to keep
  //making request for LARGE data objects because that's
  //expensive for networking). The data objects are then
  //read out in a recurring Todo line via .map().
  return (
    <div className="App">
        <h1>Lesson 9 - UseEffect & UseEffect with API Requests</h1>

        {/* |LESSON 1| - useEffect different types */}
        {/* The below Button is VERY COOL. On clicking
        it changes the showCounter to the opposite of its 
        original value via the `useState()` method. The button's
        text is then shown depending on whether the Counter
        component is "showing" :D */}
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {showCounter && <Counter />}

        {/* |LESSON 2| - useEffect with API requests */}
        {/* <TodoList /> */}
    </div>
  );
}

export default App;
