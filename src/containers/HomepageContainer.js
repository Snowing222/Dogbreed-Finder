import React from 'react'
import UseHomepage from './UseHomepageContainer'

import Homepage from '../components/Homepage/Homepage'


const HomepageContainer = () => {

  const {
    setSearchTerm,
    dogbreeds,
    searchTerm
  } = UseHomepage()

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
