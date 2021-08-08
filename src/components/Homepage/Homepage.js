import React from 'react'
import UseHomepage from './UseHomepage'

import HomepageContainer from './HomepageContainer'


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
      <HomepageContainer filteredDogbreeds={filteredDogbreeds} setSearchTerm={setSearchTerm} />
    )
}

export default Homepage
