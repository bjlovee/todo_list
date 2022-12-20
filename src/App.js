
import './App.css';
import { useState, useEffect } from 'react';
import ToDoPage from './componets/ToDoPage';
import Todo from './componets/Todo';
import TodoList from './componets/TodoList';

function App(props) {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  const addTodo = (e) => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    setTodos([newTodo, ...todos])
    e.target.value = ""
  }

  const completeTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    setTodos([...todosCopy])
  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
  };



  
  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
      {/* <ToDoPage /> */}
    </div>
  );
}

export default App;
