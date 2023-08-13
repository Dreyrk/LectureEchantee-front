import React from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import useThemeContext from '../hooks/useThemeContext';
import BookmarkBtn from '../components/BookmarkBtn';

function Details() {
    const { id } = useParams()
    const { theme } = useThemeContext();

    const data = {
        _id: 2,
        title: 'Deeeeeeeeeeeeeeeeeeeeelll',
        cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
        chapters: [1, 1, 1, 1, 1, 1, 1]
    };

    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className="main">
                <div className='py-2 border-b-2 border-secondary-plus'>
                    <h1 className={`text-3xl font-bold ${data.title.length > 25 && 'animate-scrollText'}`}>{data.title}</h1>
                </div>
                <div className='flex flex-col items-center p-2 mt-10 justify-evenly'>
                    <img className='h-40 rounded-lg w-28' src={data.cover} alt="cover" />
                </div>
                <div>
                    <BookmarkBtn data={data} />
                </div>
            </div>
        </div>
    )
}

export default Details
