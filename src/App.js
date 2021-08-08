import React from 'react'
import { Switch, Route } from "react-router-dom";

import HomepageContainer from './components/Homepage/HomepageContainer'
import DogbreedImages from './components/DogbreedImages/DogbreedImagesContainer';
import './App.css'
import DogbreedImagescontainer from './components/DogbreedImages/DogbreedImagesContainer';


function App() {

  return (
    <div className = "App">
        <h1>Dog Breed Finder</h1>
        <Switch>
          <Route exact path = "/">
            <HomepageContainer />
          </Route>
          <Route path = "/:breed">
            <DogbreedImagescontainer />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
