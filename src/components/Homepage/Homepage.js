import React from 'react'
import UseHomepage from './UseHomepage'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'


const Homepage = () => {

  const {
    handleSetSearchTerm,
    filteredDogbreeds
  } = UseHomepage()

    return (
        <div>
         <Searchbar handleSetSearchTerm = {handleSetSearchTerm} />
  
         {filteredDogbreeds.map((dogbreed) => (
           <li key = {dogbreed}>
               <Link to = {"/" + dogbreed} title = "dogbreedlink">{dogbreed} </Link>
           </li>
            
         ))}
     </div>
    )
}

export default Homepage
