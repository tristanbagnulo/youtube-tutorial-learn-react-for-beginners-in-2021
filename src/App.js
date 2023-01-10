import './App.css';

function App() {
  const employees = ["Tristan", "George"];
  const undefinedName = undefined;
  const isTrue = true; // <- change true/false to see outcome of e.g. #6
  
  //1. TOPIC #1 - Conditional operator for variable declaration

  //The variable 'firstEmployee' is only assigned to 'employees[0]'
  //if the employees array is not undefined...

  // e.g. 1.1 - Below is Condition Satisfiedfully assigned to "Tristan"
  const firstEmployee = employees && employees[0];
  // e.g. 1.2 - Below is NOT Condition Satisfiedfully assigned.
  const undefinedEmployee = undefinedName && 
    "This name will not be assigned because it's 'undefined above'";
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lesson 7</h1>
        {/* TOPIC# 2. Conditional operator to display <h2> or not*/}
        {/* e.g. 1.1 - Display employee name if it exists */}
        {/* Condition Satisfied */}
        {firstEmployee && (
          <h4>e.g. #1.1 - First employee: {firstEmployee}</h4>
        )}
        {/* e.g. 1.2 - Doesn't display employee name because it's 
        undefined */}
        {/* Condition NOT Satisfied */}
        {undefinedEmployee && (
          <h4>e.g. # 1.2 - This name will not appear on the site.</h4>
        )}
        {/* e.g. 2 - same above but with map (for loop) */}
        {/* Condition Satisfied */}
        {employees && employees[0] && employees.length > 0 && (
          <div>
            <h3><u>e.g. #2 - Employee List:</u></h3>
            {employees.map((employee) => (
                  <h4>Name | {employee} </h4>
            ))} 
          </div>
        )}
        {/* e.g. 3 - Numeric operators */}
        {/* Condition Satisfied */}
        {7 > 6 && 
          <h4>e.g. #3 - 7 is greater than 5</h4>
        } 
        {/* e.g. 4 - Numeric operators */}
        {/* Condition NOT Satisfied */}
        {7 > 9 && 
          <h4>e.g. 4 - This text will not be displayed.</h4>
        } 
        {/* e.g. 5 - Numeric operators in double negative */}
        {/* Condition Satisfied */}
        {!(7 > 8) && (
          <h4>e.g. #5 - 7 is not greater than 8</h4>
        )}
        {/* TOPIC #3. Ternary Operator */}
        {/* e.g 6 - Ternary operator */}
        {/* change 'isTrue' variable above to true/false to see outcome of e.g. #6 */}
        {/* format -  true-or-false-returned-value ? if-true-condition : if-false-condition */}
        {/* Note: () brackets are optional but improve readability. */}
        {isTrue ? (
          <h4>e.g. #6 - It is TRUE</h4>
        ) : (
          <h4>e.g. #6 - It was NOT TRUE</h4>
        )}
      </header>
    </div>
  );
}

export default App;
