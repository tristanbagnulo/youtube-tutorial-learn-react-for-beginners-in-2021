import React from 'react';

/*Props - Properties are passed into Employee when it is
called in App.js.*/
const Employee = (props) => {
    console.log(props);
    //Variable Destructuring: The props object contains all
    // of the relevant variables and they are drawn out via
    //destructuring below. They are used within the JSX and
    // in turn are rendered :). VERY COOL! 
    // This first method below is my favourite...
    // I find descructuring into variables in const before
    // getting to the JSX is very readable.
    const {firstName, lastName, age: employeeAge} = props;
    return (
        <React.Fragment>
            {/* Props usage with variable reassignment in destructuring */}
            <span>
                <h2>With Destructuring</h2>
                <div>
                    <p>This is an employee: {lastName}, {firstName} who's age is {employeeAge}</p>
                </div>
            {/* Props usage without Destructured elements of object.*/}
                <h2>Without Destructuring</h2>
                <div>
                    <p>This is ALSO an employee: {props.lastName}, {props.firstName}, {props.age}</p>
                </div>
                
                
            </span>
            
            
            
        </React.Fragment>
        
    )
}

export default Employee;