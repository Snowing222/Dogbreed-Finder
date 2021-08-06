import React from 'react'
import UseHomepage from './UseHomepage'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'


const Homepage = () => {

  const {
    setSearchTerm,
    dogbreeds,
    searchTerm
  } = UseHomepage('https://dog.ceo/api/breeds/list/all')

  const filteredDogbreeds = dogbreeds.filter((val)=>{
    if(searchTerm === ""){
      return val
    }else if(val.includes(searchTerm.toLocaleLowerCase())){
      return val
    }
  })

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
