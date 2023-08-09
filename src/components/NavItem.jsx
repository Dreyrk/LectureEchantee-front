import React from 'react'
import { NavLink } from 'react-router-dom';


function NavItem({ link }) {
    return (
        <li className='text-center'>
            <NavLink to={link.path} className={({ isActive, isPending }) => `p-2 rounded-md flex flex-col justify-center ${isActive && "bg-secondary-plus"} ${isPending && "bg-red"}`}>
                <div className={'grid place-content-center'}>
                    {link.logo}
                </div>
            </NavLink>
            <span className='w-full text-sm text-center'>{link.name}</span>
        </li>
    )
}

export default NavItem;
