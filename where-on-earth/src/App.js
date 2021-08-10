import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomeViews from './views/HomeViews';

function App() {
  return (
    <div>
      <Router>
        <HomeViews path='/'/>
      </Router>
    </div>
  );
}

export default App;
