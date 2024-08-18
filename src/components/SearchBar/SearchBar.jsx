import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className='sbar'>
            <div className="InputContainer">
                <input placeholder="Search.." id="input" className="input" name="text" type="text"/>
            </div>
        </div>
    )
}

export default SearchBar