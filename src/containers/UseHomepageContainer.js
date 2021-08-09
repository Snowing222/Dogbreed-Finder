import { useState, useEffect } from 'react'
import alldogbreeds from '../services/fetchDogbreeds'


const UseHomepage = () => {
  const [dogbreeds, setDogbreeds] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  const resetSearchTerm = () =>{
    setSearchTerm("")
  }

  // const fetchDogbreeds = () =>{
  //   fetch('https://dog.ceo/api/breeds/list/all')
  //   .then(resp => resp.json())
  //   .then(data => setDogbreeds(Object.keys(data.message)))
  // }


  useEffect(() => {
    const getBreeds = async()=>
    {
      const dogbreeds = await alldogbreeds()
      setDogbreeds(dogbreeds)
    }
    resetSearchTerm()
    getBreeds()
  }, []);

//   useEffect(()=>{
//     const getImages = async()=>
//     {
//     const dogImages = await dogbreedImages(breed)
//     setImages(dogImages)
//     }
// getImages()
// },[breed])

  return {
    setSearchTerm,
    dogbreeds,
    searchTerm,
  };
}

export default UseHomepage
