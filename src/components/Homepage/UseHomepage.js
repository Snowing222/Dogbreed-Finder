import { useState, useEffect } from 'react'

const UseHomepage = () => {
  const [dogbreeds, setDogbreeds] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  const resetSearchTerm = () =>{
    setSearchTerm("")
  }

  const fetchDogbreeds = () =>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => setDogbreeds(Object.keys(data.message)))
  }

  const handleSetSearchTerm = (SearchTerm) => {
    setSearchTerm(SearchTerm)
  }

  useEffect(() => {
    resetSearchTerm()
    fetchDogbreeds();
  }, []);

  const filteredDogbreeds = dogbreeds.filter((val)=>{
    if(searchTerm === ""){
      return val
    }else if(val.includes(searchTerm.toLocaleLowerCase())){
      return val
    }
  })


  return {
    handleSetSearchTerm,
    filteredDogbreeds
  };
}

export default UseHomepage
