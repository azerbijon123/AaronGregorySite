import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import HomeSearch from './components/HomeSearch';

const App = (props) => {
  const [searchItems, setSearchItems] = useState(
    [
      { 
          term: 'gitHub',
          address: 'https://github.com/azerbijon123'
      },
      {
          term: 'facebook',
          address: 'https://facebook.com'
      },
      {
          term: 'google',
          address: 'https://google.com'
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
