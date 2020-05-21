import React from 'react';

import { Router } from '@reach/router';
import 'bootswatch/dist/solar/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container" >
            <h1 className="title">
              Favorite Authors
            </h1>
            <h2 className="subtitle">
              Authors
            </h2>
          </div>
        </div>
      </section>
      <Nav />
      <Router>
        <Home path="/"/>
        <NewAuthor path="/new" />
        <EditAuthor path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;