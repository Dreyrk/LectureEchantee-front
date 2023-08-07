import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillHome, AiOutlineUser } from "react-icons/ai"
import { BsFillBookmarkHeartFill } from "react-icons/bs"
import { GiSpellBook } from "react-icons/gi"


import useCurrentUserContext from "../hooks/useCurrentUserContext.js"

function NavBar({ isOpen }) {
    const { user } = useCurrentUserContext();
    const links = [
        {
            name: "Home",
            path: `/`,
            requireLogin: false,
            logo: <AiFillHome size={30} />
        },
        {
            name: "Library",
            path: `/profile/${user._id}/library`,
            requireLogin: true,
            logo: <BsFillBookmarkHeartFill size={30} />
        },
        {
            name: "Browse",
            path: `/browse`,
            requireLogin: false,
            logo: <GiSpellBook size={30} />
        },
        {
            name: "Login/Register",
            path: `/authenticate`,
            requireLogin: false,
            logo: <AiOutlineUser size={30} />
        },
    ]

    return (
        <motion.nav
            className='h-20 bg-light-black '
            initial={{ y: -50, opacity: 0 }}
            animate={{
                y: isOpen && 0,
                opacity: isOpen && 1,
            }}
            transition={{ bounce: 0 }}
        >
            <ul className='flex items-center justify-around w-full h-full'>
                {links.map((link) => {
                    if (link.requireLogin && !user._id) {
                        return null
                    }
                    return (
                        <li className='text-white'>
                            <div>
                                {link.logo}
                            </div>
                            <NavLink to={link.path}>{link.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </motion.nav>
    )
}

export default NavBar;
