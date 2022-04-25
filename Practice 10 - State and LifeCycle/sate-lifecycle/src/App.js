import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList/todo-list";
import Student from "./components/StudentManagement/student";

function App() {
    const [todoList, setTodoList] = useState([]);
    const addTodo = (value) => {
        const newTodoList = [...todoList]
        if (!newTodoList.includes(value)) {
            newTodoList.push(value)
        }
        setTodoList(newTodoList)
    }
    return (
        <div className="App">
            <ul>
                {todoList.map((todo) => {
                    return <li>{todo}</li>;
                })}
            </ul>
            <TodoList addTodo={addTodo}></TodoList>
            <Student></Student>
        </div>
    );
}

export default App;
