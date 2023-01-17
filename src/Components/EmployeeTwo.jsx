import React from 'react';


//Descructuring of the props object directly in the 
//parameters window.
const EmployeeTwo = ({firstName, lastName, age}) => {
    return (
        <div>
            <p>
                Employee using completely destructured props in function component signature: {firstName} {lastName} is {age} years old.
            </p>
        </div>
    )
};

export default EmployeeTwo;