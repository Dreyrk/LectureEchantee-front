import React from 'react'
import { NavLink } from 'react-router-dom';


function NavItem({ link }) {
    return (
        <li>
            <NavLink to={link.path} className={({ isActive, isPending }) => `p-2 rounded-md flex flex-col justify-center text-white ${isActive && "bg-secondary-plus"}`}>
                <div className={'grid place-content-center'}>
                    {link.logo}
                </div>
            </NavLink>
            <span className='text-center text-white'>{link.name}</span>
        </li>
    )
}

export default NavItem;
