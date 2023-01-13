import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState(); //todos originally set to undefined

    //The below 'useEffect' function runs once, when TodoList is mounted.
    //
    useEffect(() => {
        console.log("The use effect ran");
        //The 'axios.get' method sends a https request to the url and returns
        //an object which can be accessed via '.then(res => {})'.
        //The variable, 'res' is the returned object.
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
                const responseTodos = res.data;
                //The 'todos' variable is then assigned to the res obejct
                //using the setTodos method of the useState() obejct.
                setTodos(responseTodos);
        });
    }, []); // <- reason only runs once (empty array parameter)

    return (
        <div>
            <h2>Todo List</h2>
            {/* Below the todos obejct is being mapped out (for loop)
            to paragraphs <p></p>. */}
            {todos && todos.map(todo => {
                // First, data lines are extracted from the object
                //which looks like this...
                // {
                //     "userId": 1,
                //     "id": 1,
                //     "title": "delectus aut autem",
                //     "completed": false
                // }
                const {userId, id, completed, title} = todo;
                completed && console.log("Completed");
                return (
                    <React.Fragment key={(id)}>
                        <p><u>Title:</u> {title} | <u>uID:</u> {userId} | <u>ID:</u> {id} | <u>Completed:</u> {completed ? "Yes" : "No"}</p>
                    </React.Fragment>
                )
            })}
        </div> 
    );
};

export default TodoList;