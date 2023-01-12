import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState(); //todos originally set to undefined

    useEffect(() => {
        console.log("The use effect ran");
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
                const responseTodos = res.data;
                setTodos(responseTodos);
        });
    }, []); //run only once when component mounts

    return (
        <div>
            <h2>Todo List</h2>
            {todos && todos.map(todo => {
                const {userId, title, completed} = todo;
                return (
                    <>
                        <h5>Title: {title} | uID: {userId} | Completed: {completed}</h5>
                    </>
                )
            })}
        </div>
    );
};

export default TodoList;