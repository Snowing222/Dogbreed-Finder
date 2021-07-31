import { useState , useEffect,} from 'react'
import { useParams } from 'react-router'

const useDogbreed = () => {
  
    const [images, setImages] = useState([])
    const {breed}  = useParams()
    const fetchImages = () =>{
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
        .then(resp => resp.json())
        .then(data => {
            setImages(data)
        })
      
    }
      
    useEffect(()=>{
        fetchImages()
    },[breed])

    return {images};
}

export default useDogbreed
