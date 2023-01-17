
import './App.css';
import Employee from "./Components/Employee";
import EmployeeTwo from './Components/EmployeeTwo';
import { durationInYears } from "@progress/kendo-date-math";
import React from 'react';

function App() {
  /* The below application displays information on a page from
  an array of objects called `employeeInfo`. */
  const employeeInfo = [
    {
      firstName:"Tristan",
      lastName:"Bagnulo",
      age: durationInYears(new Date(1997, 11, 30), new Date()),
      employeeId: 1
    },
    {
      firstName:"Odin",
      lastName:"All Father",
      age: "3000",
      employeeId: 2
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map(employee => {
          const {firstName, lastName, age } = employee;
          return (
            <React.Fragment>
              <Employee firstName={firstName} lastName={lastName} age={age} />
            </React.Fragment>
            
          );
        })}
        {/* Quick mapping below. More mapping (looping)
        done later. */}
        {employeeInfo.map(employee => {
          const {firstName, lastName, age } = employee;
          return (
            
            <React.Fragment>
              <h2>Without spreading</h2>
              <EmployeeTwo firstName={firstName} lastName={lastName} age={age} />
              <h2>With spreading</h2>
              <EmployeeTwo key={employee.employeeId}{...employee} />
            </React.Fragment>
          );
        })}
      </header>
    </div>
  );
}

export default App;
