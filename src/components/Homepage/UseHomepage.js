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

  return {
    dogbreeds,
    searchTerm,
    resetSearchTerm,
    handleSetSearchTerm,
  };
}

export default UseHomepage
