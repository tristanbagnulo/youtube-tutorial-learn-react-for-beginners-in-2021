import React from 'react';

//Props
const Employee = (props) => {
    console.log(props);
    //Variable Destructuring...
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