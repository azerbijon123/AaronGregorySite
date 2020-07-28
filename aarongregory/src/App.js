import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SearchSection from './sections/SearchSection';
import MainSection from './sections/MainSection';
import TestSection from './sections/TestSection';

const App = (props) => {

  return (
    <Router>
      <Route exact path="/"       component={MainSection} />
      <Route       path="/search" component={SearchSection} />
      <Route       path="/test"   component={TestSection} />
    </Router>
  );
}

export default App;
