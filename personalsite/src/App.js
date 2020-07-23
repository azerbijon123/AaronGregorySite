import React, {useState} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

import './App.css';

const App = props => {

  const [todos, setTodos] = useState(
    [
        {
            id: uuid(), 
            title: 'Take out the trash',
            completed: true
        },
        {
            id: uuid(), 
            title: 'Do something else here',
            completed: false
        },
        {
            id: uuid(), 
            title: 'Water the flowers',
            completed: false
        },
    ]
);

// Toggle Complete
const markComplete = (id) => {
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    };
    return todo;
  }))
};

// Delete Todo
const deleteTodo = (id) => {
    setTodos( [...todos.filter(todo => todo.id !== id)] );
};

// Add Todo
const addTodo = (title) => {
  const newTodo = {
    id: uuid(),
    title,
    completed: false
  };
  setTodos( [...todos, newTodo]);
};

console.log({todos})
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={addTodo}/>
        <Todos 
            todos={todos}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
