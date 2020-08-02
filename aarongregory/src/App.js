import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SearchSection from './sections/SearchSection';
import MainSection from './sections/MainSection';
import TestSection from './sections/TestSection';
import MinestroneFeatureSection from './sections/MinestroneFeatureSection';
import Blog from './components/layout/blog/Blog';

const App = (props) => {

  return (
    <Router>
      <Route exact path="/"       component={MainSection} />
      <Route exact path="/search" component={SearchSection} />
      <Route       path="/test"   component={TestSection} />
      <Route       path="/mf"     component={MinestroneFeatureSection} />
      <Route       path="/blog"   component={Blog} />
    </Router>
  );
}

export default App;
