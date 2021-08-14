import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomeViews from './views/HomeViews';
import BookerPage from   './views/BookerPage';
import AgenciesViews from './views/AgenciesViews';
import Agency from './views/Agency';
import ThankPage from './views/ThankPage';

function App() {
  return (
    <div>
      <Router>
        <HomeViews path='/'/>
        <BookerPage path= '/:tour/:agencyId/:tourId'/>
        <AgenciesViews path='/:tour'/>
        <Agency path="/:tour/:id"/>
        <ThankPage path ="/success"/>
      </Router>
    </div>
  );
}

export default App;
