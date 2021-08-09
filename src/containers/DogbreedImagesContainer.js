import {Link} from 'react-router-dom'

import './DogbreedImages.css'
import useDogbreedImages from './useDogbreedImagesContainer'
import DogbreedImages from '../components/DogbreedImages/DogbreedImages'


const DogbreedImagescontainer = () => {
    const images = useDogbreedImages()
    return (
        <div>
           <Link to = '/' className ="back">Search More breed</Link>
           <DogbreedImages images = {images} />
        </div>
    )
}

export default DogbreedImagescontainer
