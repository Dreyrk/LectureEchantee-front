import React from 'react'
import { NavLink } from 'react-router-dom';
import useThemeContext from '../hooks/useThemeContext';

function ManhwaBox({ manhwa, isLoading, isError }) {
    const { theme } = useThemeContext()
    if (!manhwa && isLoading) {
        return (
            <div className='min-h-[254px] min-w-[164px] grid p-2 bg-dark-secondary'>
                <div className='w-full bg-black h-2/3 animate-pulse'>
                </div>
                <div className='w-full text-white bg-black h-1/3 animate-pulse'>
                </div>
            </div>
        )
    } else if (!manhwa && isError) {
        return (
            <p>{isError}</p>
        )
    } else {
        return (
            <NavLink to={`/manhwa/${manhwa._id}`} className={`min-h-[254px] max-w-[164px] grid p-2 text-${theme}-secondary`}>
                <div className='w-full h-2/3'>
                    <img className='object-cover rounded-xl hover:-translate-y-4' src={manhwa.cover} alt={manhwa.title} />
                </div>
                <div className={`w-full h-1/3`}>
                    <h3 className='text-base font-semibold'>{manhwa.title}</h3>
                    <span className='text-xs font-light'>Chapter {manhwa.chapters.length}</span>
                </div>
            </NavLink>
        )
    }
}

export default ManhwaBox;
