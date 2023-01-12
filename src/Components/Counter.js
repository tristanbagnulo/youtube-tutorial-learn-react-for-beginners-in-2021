import React, {useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    //There are three main useEffect hook types. They are
    //written below...
    //The console logs which they log can be seen in the 
    //"Console" tab of the developer tools window on your 
    //browser. 

    //1 - componentDidMount
    useEffect(() => {
        console.log("Mounted: Mount ONLY");
    }, []);
    //Note the array parameter '[]' is added but is empty.
    //This means that no parameters, for example a 'count' 
    //value have been passed into the use effect, method
    //therefore, this will only run once mounting.

    //2 - componentDidUpdate
    //Update every time the component Mounts AND
    //When the parapeter 'count' updates.
    useEffect(() => {
        console.log("Updated: Mount & Update");
    }, [count]); //Adding the 'count' parameter makes it 
    

    //3 - componentWillUnmount
    //Runs only when the component Unmounts or Mounts
    useEffect(() => {
        return () => {
            console.log("Unmounted: Unmount and Mount ONLY");
        }
    }, []);

    //X - Component updated (DANGEROUS!!)
    //Is run on EVERY RENDER of the component. 
    useEffect(() => {
        console.log("Component Rendered :D");
    })


    return (
        <div>
            <h4>Counter</h4>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count +1)}>Increase Count</button>
        </div>
    );
};

export default Counter;