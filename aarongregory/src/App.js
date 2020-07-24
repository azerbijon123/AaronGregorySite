import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import HomeSearch from './components/HomeSearch';

const App = (props) => {
  const [searchItems, setSearchItems] = useState(
    [
      {
          id: 1,  
          term: 'GitHub',
      },
      {
          id: 2, 
          term: 'Facebook',
      },
      {
          id: 3, 
          term: 'Google',
      },
    ]
  );

  return (
    <div className="App">
      <header className="App-header">
        <HomeSearch searchItems={ searchItems } />
      </header>
    </div>
  );
}

export default App;
