import { useState, useEffect } from 'react'
import DogbreedImage from '../components/DogbreedImages/DogbreedImage'
import dogbreeds from '../services/fetchDogbreeds'

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


  useEffect(() => {
    const getBreeds = async()=>{
      const dogbreeds = await dogbreeds()
      setDogbreeds(DogbreedImage)
    }
    resetSearchTerm()
    getBreeds()
  }, []);

  return {
    setSearchTerm,
    dogbreeds,
    searchTerm,
    fetchDogbreeds
  };
}

export default UseHomepage
