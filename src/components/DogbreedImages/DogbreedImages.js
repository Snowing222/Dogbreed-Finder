import {withRouter, Link} from 'react-router-dom'

import './DogbreedImages.css'
import useDogbreed from './useDogbreedImages'

const Dogbreed = () => {
    const images = useDogbreed()
    return (
        <div>
           <Link to = '/' className ="back">Search More breed</Link>
           {
               images.message && images.message.map((img, index) =>(
                   <img src = {img} width="300" height="400" alt = {index} key = {index}/>
               ))
           }
          
        </div>
    )
}

export default withRouter(Dogbreed)
