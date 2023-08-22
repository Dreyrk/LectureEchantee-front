/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsFillBookmarkHeartFill, BsPersonFillGear } from "react-icons/bs";
import { BiLogOut, BiEdit } from "react-icons/bi";

import useThemeContext from '../hooks/useThemeContext'
import PageHeader from '../components/PageHeader'
import useCurrentUserContext from '../hooks/useCurrentUserContext'

function Profile() {
    const { theme } = useThemeContext()
    const { user, setUser, setToken, token } = useCurrentUserContext();
    const navigate = useNavigate();
    const [editProfile, setEditProfile] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/authenticate")
        } else {
            return
        }
    }, [token])

    const logout = () => {
        setUser({});
        setToken("");
    }

    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className="main">
                <div className="grid w-full max-w-md min-h-screen grid-rows-2 p-6 rounded-md">
                    <div className="row-span-1 mb-6 text-center">
                        <img className='w-24 h-24 mx-auto rounded-full' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user-pp" />
                        {editProfile ? <input className='p-2 my-4 rounded-lg' type="text" value={user.pseudo} onChange={(e) => setUser({ ...user, pseudo: e.target.value })} /> : <h1 className="mt-2 text-xl font-semibold">{user.pseudo}</h1>}
                        {editProfile ? <input className='p-2 my-4 rounded-lg' type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /> : <p className="font-light text-gray-500">{user.email}</p>}
                        {user.isAdmin && <p className="text-2xl font-bold text-red">Admin Account</p>}
                        {editProfile && <button type='button' className='p-1 m-4 font-semibold rounded-lg w-28 bg-secondary-plus' onClick={() => setEditProfile(false)}>Done</button>}
                    </div>
                    <div className="row-span-2 mb-4">
                        <ul className="flex flex-col gap-8 space-y-2">
                            {
                                user.isAdmin &&
                                <li className={`border border-secondary-plus bg-${theme}-secondary p-1 font-semibold rounded-lg`}>
                                    <NavLink to={"/admin"} className='flex justify-center gap-4'>
                                        Admin Actions
                                        <BsPersonFillGear size={25} />
                                    </NavLink>
                                </li>
                            }
                            <li className={`border border-secondary-plus bg-${theme}-secondary p-1 font-semibold rounded-lg`}>
                                <button className='flex justify-center w-full gap-4 disabled:blur-sm' disabled={editProfile} onClick={() => setEditProfile(true)} type='button'>
                                    Edit Profile
                                    <BiEdit size={25} />
                                </button>
                            </li>
                            <li className={`border border-secondary-plus bg-${theme}-secondary p-1 font-semibold rounded-lg`}>
                                <NavLink to={"/profile/library"} className='flex justify-center gap-4'>
                                    Library
                                    <BsFillBookmarkHeartFill size={25} />
                                </NavLink>
                            </li>
                            <li className={`border border-secondary-plus bg-${theme}-secondary p-1 font-semibold rounded-lg`}>
                                <button className='flex justify-center w-full gap-4' type='button' onClick={logout}>
                                    Logout
                                    <BiLogOut size={25} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
