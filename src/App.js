import "./App.css";
import React, { useState, useEffect } from "react";
import ListItem from "./components/ListItem";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        const temp = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(temp);

        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        };

        setTodos([...todos].concat(newTodo));
        setTodo("");
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h1>...ToDo List...</h1>
                </div>

                <div className="text">
                    <input
                        type="text"
                        placeholder="enter your task"
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                    />
                    <button type="submit">Add</button>
                </div>
            </form>

            <div className="list">
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
