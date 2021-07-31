import React from 'react'
import UseHomepage from './UseHomepage'
import {Link} from 'react-router-dom'


const Homepage = () => {
  const {
    dogbreeds,
    searchTerm,
    handleSetSearchTerm,
  } = UseHomepage()
  
    return (
        <div>
        <input type = 'text' placeholder = 'Search...' onChange = {(e)=>{handleSetSearchTerm(e.target.value)}}/>
         {dogbreeds.filter((val)=>{
           if(searchTerm === ""){
             return val
           }else if(val.includes(searchTerm.toLocaleLowerCase())){
             return val
           }
         }).map((dogbreed) => (
           <li key = {dogbreed}>
               <Link to = {"/" + dogbreed}>{dogbreed} </Link>
           </li>
            
         ))}
     </div>
    )
}

export default Homepage
