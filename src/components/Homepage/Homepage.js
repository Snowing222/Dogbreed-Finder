import React from 'react'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'

const Homepage = ({setSearchTerm, filteredDogbreeds}) => {
    return (
        <div>
         <Searchbar setSearchTerm = {setSearchTerm} />
  
         {filteredDogbreeds.map((dogbreed) => (
           <li key = {dogbreed}>
               <Link to = {"/" + dogbreed} title = "dogbreedlink" ata-testid = "dogbreedlink">{dogbreed} </Link>
           </li>
            
         ))}
     </div>
    )
}

export default Homepage