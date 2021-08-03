import React from 'react'

const Searchbar = ({handleSetSearchTerm}) => {
    return (
        <div>
            <input type = 'text' placeholder = 'Search...' onChange = {(e)=>{handleSetSearchTerm(e.target.value)}} title = "input"/>
        </div>
    )
}

export default Searchbar
