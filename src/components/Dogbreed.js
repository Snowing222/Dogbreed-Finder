import React, {useState, useEffect} from 'react'
import {withRouter, Link} from 'react-router-dom'

import './Dogbreed.css'

const Dogbreed = ({match, resetSearchTerm}) => {
    const [images, setImages] = useState([])
    const breed = match.params.breed
    const fetchImages = () =>{
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
        .then(resp => resp.json())
        .then(data => {
            setImages(data)
            resetSearchTerm()
        })

    }

    useEffect(()=>{
        fetchImages()
    },[breed])

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
