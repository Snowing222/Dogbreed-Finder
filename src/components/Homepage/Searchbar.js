import React from 'react'

const Searchbar = ({setSearchTerm}) => {
    return (
        <div>
            <input type = 'text' placeholder = 'Search...' onChange = {(e)=>{setSearchTerm(e.target.value)}} data-testid = "searchbar"/>
        </div>
    )
}

export default Searchbar
