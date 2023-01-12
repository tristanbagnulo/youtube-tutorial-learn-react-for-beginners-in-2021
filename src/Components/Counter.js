import React, {useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // TOPIC #2 - |The `useEffect` hook|
    // The `useEffect` hook will run once when
    // a component is Mounted or Updated below. More on next lesson.
    useEffect(() => {
        console.log("The component was mounted/updated and the useEffect ran. Run #: " + count);
        //Adding a return makes something happen when the component
        //is unmounted.
        return () => {
            console.log("The component was unmounted.");
        }
    }, [count]);

    return (
        <div>
            <h4>Counter</h4>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count +1)}>Increase Count</button>
        </div>
    );
};

export default Counter;