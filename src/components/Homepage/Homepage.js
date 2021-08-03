import React from 'react'
import UseHomepage from './UseHomepage'
import {Link} from 'react-router-dom'


const Homepage = () => {
  const {
    handleSetSearchTerm,
    filteredDogbreeds
  } = UseHomepage()


    return (
        <div>
        <input type = 'text' placeholder = 'Search...' onChange = {(e)=>{handleSetSearchTerm(e.target.value)}}/>
         {filteredDogbreeds.map((dogbreed) => (
           <li key = {dogbreed}>
               <Link to = {"/" + dogbreed}>{dogbreed} </Link>
           </li>
            
         ))}
     </div>
    )
}

export default Homepage
