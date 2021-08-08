import React from 'react'
import DogbreedImage from './DogbreedImage'

const DogbreedImages = ({images}) => {
    return (
        <div>
            {images.map((img, index) =>(
    <DogbreedImage img = {img} index = {index}/>
))}
        </div>
    )
}

export default DogbreedImages


