import React from 'react'
import { NavLink } from 'react-router-dom';

function ManhwaBox({ manhwa }) {
    return (
        <NavLink to={`/manhwa/${manhwa._id}`} className='min-h-[254px] min-w-[164px] grid p-2'>
            <div className='w-full h-2/3'>
                <img className='object-cover rounded-xl hover:-translate-y-4' src={manhwa.cover} alt={manhwa.title} />
            </div>
            <div className='w-full text-white h-1/3'>
                <h3 className='text-base font-semibold'>{manhwa.title}</h3>
                <span className='text-xs font-light'>Chapter {manhwa.chapters.length}</span>
            </div>
        </NavLink>
    )
}

export default ManhwaBox;
