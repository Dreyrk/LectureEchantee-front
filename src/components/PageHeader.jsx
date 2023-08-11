import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { BsMoonStarsFill } from "react-icons/bs"

import NavBar from './NavBar'
import SearchBar from './SearchBar';
import useThemeContext from '../hooks/useThemeContext';

function PageHeader() {
    const { theme, setTheme } = useThemeContext()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=''>
            <div className={`fixed top-0 z-50 flex items-center justify-around w-full p-2 h-14 ${theme === 'dark' ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
                {isOpen ?
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <IoMdClose size={30} />
                    </button> :
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu size={30} />
                    </button>
                }
                <SearchBar />
                <button type='button' className='no-style-btn' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <BsMoonStarsFill size={30} />
                </button>
            </div>
            {isOpen && <NavBar />}
        </div>
    )
}

export default PageHeader;
