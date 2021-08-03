import {Link} from 'react-router-dom'

import './DogbreedImages.css'
import useDogbreedImages from './useDogbreedImages'

const displayImages = (images) => images.message && images.message.map((img, index) =>(
    <img src = {img} width="300" height="400" alt = {index} key = {index}/>
))


const DogbreedImages = () => {
    const images = useDogbreedImages()

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
