import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { BsMoonStarsFill } from "react-icons/bs"

import NavBar from './NavBar'

function PageHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=''>
            <div className='flex items-center justify-around h-14 bg-secondary'>
                {isOpen ?
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <IoMdClose size={30} />
                    </button> :
                    <button type='button' onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu size={30} />
                    </button>
                }
                <div>
                    <input className='' placeholder='search' type="text" />
                </div>
                <div>
                    <BsMoonStarsFill size={30} />
                </div>
            </div>
            <NavBar isOpen={isOpen} />
        </div>
    )
}

export default PageHeader
