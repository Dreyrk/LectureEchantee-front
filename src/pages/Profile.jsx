import React from 'react'
import useThemeContext from '../hooks/useThemeContext'
import PageHeader from '../components/PageHeader'

function Profile() {
    const { theme } = useThemeContext()
    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className='flex flex-col items-center main'>
                <div className='w-32 h-32 overflow-hidden rounded-full'>
                    <img className='object-cover' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user-pp" />
                </div>
                <ul className="grid place-content-center lg:grid-cols-4">
                    <li>Edit Profile</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
