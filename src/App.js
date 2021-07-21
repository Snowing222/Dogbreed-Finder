import React, {useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom";

import Dogbreeds from './components/Dogbreeds'
import Dogbreed from './components/Dogbreed';
import './App.css'


function App() {

  const [dogbreeds, setDogbreeds] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  const fetchDogbreeds = () =>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => setDogbreeds(Object.keys(data.message)))
  }

  useEffect(() => {
    fetchDogbreeds();
  }, []);

  const resetSearchTerm = () =>{
    setSearchTerm("")
  }

  const handleSetSearchTerm = (SearchTerm) => {
    setSearchTerm(SearchTerm)
  }


  return (
    <div className = "App">
        <h1>Dog Breed Finder</h1>
        <Switch>
          <Route exact path = "/">
            <Dogbreeds dogbreeds = {dogbreeds} searchTerm = {searchTerm} handleSetSearchTerm = {handleSetSearchTerm}/>
          </Route>
          <Route path = "/:breed">
            <Dogbreed resetSearchTerm = {resetSearchTerm} />
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
