import React from 'react'
import { motion } from 'framer-motion';
import { AiFillHome, AiOutlineUser } from "react-icons/ai"
import { BsFillBookmarkHeartFill } from "react-icons/bs"
import { GiSpellBook } from "react-icons/gi"
import { FaRandom } from "react-icons/fa"

import useCurrentUserContext from "../hooks/useCurrentUserContext.js"
import NavItem from './NavItem.jsx';


function NavBar() {
    const { user, token } = useCurrentUserContext();
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
            name: token ? "Profile" : "Login/Register",
            path: token ? `/profile` : "/authenticate",
            requireLogin: false,
            logo: <AiOutlineUser size={30} />
        },
        {
            name: "Surprise-me",
            path: `/manhwa/random`,
            requireLogin: false,
            logo: <FaRandom size={30} />
        },
    ]

    return (
        <motion.nav
            className={`fixed top-0 z-30 w-full h-20 bg-dark-tertiary`}
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: 56,
                opacity: 1,
            }}
            transition={{ bounce: 0 }}
        >
            <ul className='flex items-center justify-around w-full h-full'>
                {links.map((link, i) => {
                    if (link.requireLogin && !token) {
                        return null
                    }
                    return (
                        <NavItem key={i} link={link} />
                    )
                })}
            </ul>
        </motion.nav>
    )
}

export default NavBar;
