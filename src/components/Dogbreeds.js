import React from 'react'
import { Link } from 'react-router-dom'

const Dogbreeds = ({dogbreeds, searchTerm, setSearchTerm}) => {
    return (
        <div>
           <input type = 'text' placeholder = 'Search...' onChange = {(e)=>{setSearchTerm(e.target.value)}}/>
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

export default Dogbreeds
