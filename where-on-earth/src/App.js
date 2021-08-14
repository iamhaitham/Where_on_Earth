import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomeViews from './views/HomeViews';
import BookerPage from   './views/BookerPage';
import AgenciesViews from './views/AgenciesViews';
import Agency from './views/Agency';
import ThankPage from './views/ThankPage';
import Chat from './views/Chat';
import AboutAs from './views/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <HomeViews path='/'/>
        <BookerPage path= '/:tour/:agencyId/:tourId'/>
        <AgenciesViews path='/:tour'/>
        <Agency path="/:tour/:id"/>
        <ThankPage path ="/success"/>
        <Chat path="/chat"/>
        <AboutAs path="/AboutUs"/>
      </Router>
    </div>
  );
}

export default App;
