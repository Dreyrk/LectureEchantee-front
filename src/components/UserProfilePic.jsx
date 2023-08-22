import React from 'react'
import useCurrentUserContext from '../hooks/useCurrentUserContext'
import useFetch from '../hooks/useFetch';

function UserProfilePic({ id, pseudo }) {
    const { token } = useCurrentUserContext();

    const { data, isLoading, isError } = useFetch(`users/${id}`, token)

    if (id && data) {
        return (
            <div className='grid m-3 rounded-full place-content-center bg-secondary-plus'>
                <span className='text-2xl font-semibold'>{data?.pseudo.split()[0].toUpperCase()}</span>
            </div>
        )
    } else {
        return (
            <div className='grid w-16 h-16 m-3 rounded-full place-content-center bg-secondary-plus'>
                <span className='text-3xl font-semibold'>{pseudo[0].toUpperCase()}</span>
            </div>
        )
    }
}

export default UserProfilePic
