import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai"

function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center mt-20 gap-28'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-6xl'>404</h1>
                <h2 className='text-xl'>Page not Found</h2>
            </div>
            <NavLink className="hover:scale-125 hover:text-secondary-plus" to={"/"}>
                <AiFillHome size={50} />
            </NavLink>
        </div>
    )
}

export default NotFound
