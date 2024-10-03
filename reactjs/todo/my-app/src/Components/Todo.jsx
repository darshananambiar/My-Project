import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);  // State to store todos
  const [input, setInput] = useState('');  // State to store the current input

  const addTodo = (e) => {
    e.preventDefault();  // Prevent form from refreshing the page
    if (input.trim()) {  // Check if input is not empty
      setTodos([...todos, input]);  // Add the new todo
      setInput('');  // Clear the input field
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);  // Remove the todo at the given index
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
       <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Update input state as user types
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form> 
       
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
