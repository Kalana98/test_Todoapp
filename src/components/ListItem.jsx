import React, { useState, Fragment } from "react";

const ListItem = (props) => {
    const { todo, todos, setTodos } = props;
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
        setEditingText("");
    }

    return (
        <div>
            <div style={{ display: "inline-block" }}>
                {todoEditing === todo.id ? (
                    <input
                        type="text"
                        onChange={(e) => setEditingText(e.target.value)}
                        value={editingText}
                    />
                ) : (
                    <div>{todo.text}</div>
                )}
            </div>

            <div className="s_btn" style={{ display: "inline-block" }}>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>

                <input
                    type="checkbox"
                    onChange={() => toggleComplete(todo.id)}
                    checked={todo.completed}
                />

                {todoEditing === todo.id ? (
                    <Fragment>
                        <button onClick={() => editTodo(todo.id)}>
                            submit
                        </button>
                    </Fragment>
                ) : (
                    <button onClick={() => setTodoEditing(todo.id)}>
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default ListItem;
