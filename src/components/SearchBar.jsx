import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import useThemeContext from '../hooks/useThemeContext';


function SearchBar() {
    const { theme } = useThemeContext()
    const [search, setSearch] = useState("");
    const [logoColor, setLogoColor] = useState("#545454");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="relative w-2/3 text-gray-600">
            <input value={search} onChange={handleSearch} type="search" name="search" placeholder="Search..." className={`w-full h-10 px-5 pr-10 text-sm rounded-full ${theme === 'dark' ? 'bg-dark-tertiary' : 'bg-light-tertiary'} focus:outline-none`} />
            <button type="submit" className="absolute top-0 right-0 mt-2 mr-4 hover:scale-110">
                <FaSearch size={25} color={logoColor} onMouseEnter={() => setLogoColor("#2C2CA1")} onMouseLeave={() => setLogoColor("#545454")} />
            </button>
        </div>
    )
}

export default SearchBar;
