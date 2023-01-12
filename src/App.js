import './App.css';
import Counter from "./Components/Counter"
import TodoList from "./Components/TodoList"
import React, {useState, useEffect} from "react";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
        <h1>Lesson 9 - UseEffect & UseEffect with API Requests</h1>

        {/* |LESSON 1| - useEffect different types */}
        {/* <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {showCounter && <Counter />} */}

        {/* |LESSON 2| - useEffect with API requests */}
        <TodoList />
    </div>
  );
}

export default App;
