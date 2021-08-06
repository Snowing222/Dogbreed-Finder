import { useState , useEffect,} from 'react'
import { useParams } from 'react-router'

const useDogbreedImages = () => {
  
    const [images, setImages] = useState([])
    const {breed}  = useParams()
      
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
        .then(resp => resp.json())
        .then(data => {
            setImages(data.message)
        })
    },[breed])

    return images
}

export default useDogbreedImages
