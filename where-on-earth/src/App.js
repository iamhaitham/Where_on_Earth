import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomeViews from './views/HomeViews';
import BookerPage from   './views/BookerPage';
function App() {
  return (
    <div>
      <Router>
        <HomeViews path='/'/>
        <BookerPage path= '/form'/>
        
      </Router>
    </div>
  );
}

export default App;
