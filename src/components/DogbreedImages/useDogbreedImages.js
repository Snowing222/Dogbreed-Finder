import { useState , useEffect,} from 'react'
import { useParams } from 'react-router'
import dogbreedImages from '../.././services/fetchDogImages'

const useDogbreedImages = () => {
  
    const [images, setImages] = useState([])
    const {breed}  = useParams()
      
    useEffect(async()=>{
        const dogImages = await dogbreedImages(breed)
        setImages(dogImages)
    },[breed])

    return images
}

export default useDogbreedImages
