import { useState , useEffect,} from 'react'
import { useParams } from 'react-router'
import dogbreedImages from '../.././services/fetchDogImages'

const useDogbreedImages = () => {
  
    const [images, setImages] = useState([])
    const {breed}  = useParams()
      
    useEffect(()=>{
            const getImages = async()=>{
            const dogImages = await dogbreedImages(breed)
            setImages(dogImages)
        }
        getImages()
    }
        ,[breed])

    // useEffect(()=>{
    //     fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setImages(data.message)
    //     })},[breed])



    return images
}

export default useDogbreedImages
