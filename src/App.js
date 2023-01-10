import './App.css';
import React, { useState, useEffect } from "react";
import Counter from "./Components/Counter";

function App() {
  
  // TOPIC #1 - |The React Lifecycle of a Functional Component|

  // 1. |Mounting| - The component is rendered onto the 
  // page for the first time (mounted).
  // 2. |Updating| - Re-renders the given component when 
  // is changes or if the component has a state variable 
  // that updates.
  // 3. |Unmounting| - A component is removed an is no
  // longer shown on a page.

  // e.g. - |Show and Hide Counter|

  // ||Documentation||
  // |Workflow Description|
  // 1. When the site is loaded, only the "Show Counter"
  // button is shown. At this point, it is not mounted.
  // 2. When "Show Counter" is clicked, the counter 
  // component is "Mounted" and now displays with a 
  // current count of 0.
  // 3. Pressing the "Increase Count" button will 
  // "Update" the Counter component to increase its the 
  // displayed "Current count: ". 
  // Also when the counter is shown, the button's text
  // updates to "Hide Counter".
  // 4. Finally, the "Hide Coutner" button can be pressed
  // again to hide "Unmount:" the Counter component. It
  // it now no longer appears on the page.

  // |Code Documentation|
  /* The below code has a state variable called `showCounter` that 
  is initialized   using the `useState` hook. The initial value of 
  `showCounter` is false.
  The component renders a `div` element with a heading and a button. 
  When the button is clicked, the value of `showCounter` is toggled 
  by calling `setShowCounter` with the negated value of `showCounter`. 
  The text displayed on the button also changes based on the value 
  of `showCounter`.
  If `showCounter` is `true`, the component also renders a `Counter` 
  component. If `showCounter` is `false`, the `Counter` component is not 
  rendered. */

  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
        <h1>Lesson #X</h1>
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {showCounter && <Counter />}
    </div>
  );
}

export default App;