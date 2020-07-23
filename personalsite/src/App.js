import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
// import {v4 as uuid} from 'uuid';
import axios from 'axios';

import './App.css';

const App = props => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
         .then(resp => setTodos(resp.data));
  }, []);

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
      axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then(resp => setTodos( [...todos.filter(todo => todo.id !== id)] ));
  };

  // Add Todo
  const addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(resp => setTodos([...todos, resp.data]));
  };


  return (
    <Router>
      <div className="App">
        <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo}/>
                <Todos 
                    todos={todos}
                    markComplete={markComplete}
                    deleteTodo={deleteTodo}
                />
              </React.Fragment>
            )}/>

            <Route path="/about" component={About} />

        </div>
      </div>
    </Router>
  );
}

export default App;
