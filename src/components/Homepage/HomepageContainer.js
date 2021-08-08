import React from 'react'
import UseHomepage from './UseHomepage'

import Homepage from './Homepage'


const HomepageContainer = () => {

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
      <Homepage filteredDogbreeds={filteredDogbreeds} setSearchTerm={setSearchTerm} />
    )
}

export default HomepageContainer
