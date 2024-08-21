import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import Form from "./components/Form";
import TODOList from "./components/TODOList";

const App = () => {
    const [todos, setTodos] = React.useState([]);

    // Retrieve data from localStorage when component mounts
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const todos_completed = todos.filter(
        (todo) => todo.is_completed == true
    ).length;

    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TODOHero
                todos_completed={todos_completed}
                total_todos={total_todos}
            />
            <Form todos={todos} setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default function (elementId) {
    const container = document.getElementById(elementId);

    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}
