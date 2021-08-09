import React from 'react'
import { Switch, Route } from "react-router-dom";

import HomepageContainer from './containers/HomepageContainer'
import DogbreedImages from './containers/DogbreedImagesContainer';
import './App.css'
import DogbreedImagescontainer from './containers/DogbreedImagesContainer';


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
