import React from 'react'

const DogbreedImage = ({img, index}) => {
    return (
        <img src = {img} width="300" height="400" alt = {index} key = {index} title = "image"/>
    )
}

export default DogbreedImage
