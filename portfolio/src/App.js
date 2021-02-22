import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import HomePage from './pages/Home';
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';
import HomeChef from './pages/HomeChef';
import Inclusio from './pages/Inclusio';
import Maji from './pages/MAJI';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Projects" exact component={ProjectPage}/>
        <Route path="/Contact" exact component={ContactPage}/>
        <Route path="/HomeChef" exact component={HomeChef}/>
        <Route path="/Inclusio" exact component={Inclusio}/>
        <Route path="/Maji" exact component={Maji}/>
        <Route path="/Resume" exact component={Resume}/>
      </Switch>
    </Router>
  );
}

export default App;
