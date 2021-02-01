import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import HomePage from './pages/Home';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Projects" exact component={ProjectPage}/>
        <Route path="/Contact" exact component={ContactPage}/>
      </Switch>
    </Router>
  );
}

export default App;
