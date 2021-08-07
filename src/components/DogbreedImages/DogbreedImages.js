import {Link} from 'react-router-dom'

import './DogbreedImages.css'
import useDogbreedImages from './useDogbreedImages'
import DogbreedImage from './DogbreedImage'


const DogbreedImages = () => {
    const images = useDogbreedImages()

    const displayImages = (images) => images.map((img, index) =>(
        <DogbreedImage img = {img} index = {index}/>
    ))

    return (
        <div>
           <Link to = '/' className ="back">Search More breed</Link>
           {
            displayImages(images)
           }
          
        </div>
    )
}

export default DogbreedImages
