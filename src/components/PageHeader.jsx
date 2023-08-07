import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { BsMoonStarsFill } from "react-icons/bs"

import NavBar from './NavBar'
import SearchBar from './SearchBar';

function PageHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=''>
            <div className='flex items-center justify-around p-1 h-14 bg-secondary'>
                {isOpen ?
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <IoMdClose size={30} />
                    </button> :
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu size={30} />
                    </button>
                }
                <SearchBar />
                <div>
                    <BsMoonStarsFill size={30} />
                </div>
            </div>
            {isOpen && <NavBar />}
        </div>
    )
}

export default PageHeader
