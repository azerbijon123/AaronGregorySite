import React, { useState } from 'react';
import '../App.css';
import HomeSearch from '../components/HomeSearch';

const SearchSection = (props) => {
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

export default SearchSection;