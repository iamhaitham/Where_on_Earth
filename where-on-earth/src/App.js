import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomeViews from './views/HomeViews';
import BookerPage from   './views/BookerPage';
import AgenciesViews from './views/AgenciesViews';

function App() {
  return (
    <div>
      <Router>
        <HomeViews path='/'/>
        <BookerPage path= '/form'/>
        <AgenciesViews path='/:tour'/>
      </Router>
    </div>
  );
}

export default App;
