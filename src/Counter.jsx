import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    /* This lesson is about statefulness and the
    lifecycle of React components. Actually, the next
    lesson is more about that. This one is a very basic
    introdcution to that concept. Here we introduce
    the `useState()` hook (seen above). There are two
    variables assigned to it; 1. the value & 2. the updater.
    This basically allows you to call the setCount method
    which updates the count value which then causes the
    Counter object to refresh. Here, this change occurs
    when teh button to increase or decrease is clicked. */
    return (
        <React.Fragment>
            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter;