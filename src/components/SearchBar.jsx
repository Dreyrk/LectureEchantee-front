import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"


function SearchBar() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='relative grid flex-grow place-content-center'>
            <input value={search} onChange={handleSearch} className='p-2 text-white rounded-lg bg-light-black animate-caret' placeholder='Search...' type="text" />
            <button type='button' className='absolute right-[10%] -top-1 no-style-btn p-2'>
                <FaSearch size={30} color='#545454' />
            </button>
        </div>
    )
}

export default SearchBar
