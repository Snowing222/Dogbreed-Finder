import React from 'react'
import { Switch, Route } from "react-router-dom";

import Homepage from './components/Homepage/Homepage'
import DogbreedImages from './components/DogbreedImages/DogbreedImages';
import './App.css'


function App() {

  return (
    <div className = "App">
        <h1>Dog Breed Finder</h1>
        <Switch>
          <Route exact path = "/">
            <Homepage />
          </Route>
          <Route path = "/:breed">
            <DogbreedImages />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
