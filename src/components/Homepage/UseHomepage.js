import { useState, useEffect } from 'react'

const UseHomepage = (url) => {
  const [dogbreeds, setDogbreeds] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  const resetSearchTerm = () =>{
    setSearchTerm("")
  }

  const fetchDogbreeds = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setDogbreeds(Object.keys(data.message)))
  }


  useEffect(() => {
    resetSearchTerm()
    fetchDogbreeds();
  }, []);


  return {
    setSearchTerm,
    dogbreeds,
    searchTerm,
    fetchDogbreeds
  };
}

export default UseHomepage
