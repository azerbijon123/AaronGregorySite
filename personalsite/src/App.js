import React, {useState} from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {

  const [todos, setTodos] = useState(
    [
        {
            id: 1, 
            title: 'Take out the trash',
            completed: false
        },
        {
            id: 2, 
            title: 'Do something else here',
            completed: false
        },
        {
            id: 3, 
            title: 'Water the flowers',
            completed: false
        },
    ]
);

console.log({todos})
  return (
    <div className="App">
        <Todos />
    </div>
  );
}

export default App;
