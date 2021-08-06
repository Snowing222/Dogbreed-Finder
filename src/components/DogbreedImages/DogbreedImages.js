import {Link} from 'react-router-dom'

import './DogbreedImages.css'
import useDogbreedImages from './useDogbreedImages'


const DogbreedImages = () => {
    const images = useDogbreedImages()

    const displayImages = (images) => images && images.map((img, index) =>(
        <img src = {img} width="300" height="400" alt = {index} key = {index} title = "image"/>
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
