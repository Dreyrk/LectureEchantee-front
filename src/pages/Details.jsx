import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from "../hooks/useFetch.js"
import PageHeader from '../components/PageHeader';
import useThemeContext from '../hooks/useThemeContext';
import BookmarkBtn from '../components/BookmarkBtn';

function Details() {
    const { id } = useParams();
    const { theme } = useThemeContext();

    const { data, isLoading, isError } = useFetch(`manhwa/${id}`);

    const testData = {
        _id: 2,
        title: 'Deeeeeeeeeeeeeeeeeeeeelll',
        cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
        chapters: [1, 1, 1, 1, 1, 1, 1]
    };

    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className="grid-cols-5 grid-rows-8 main lg:grid">
                <div className='flex flex-col justify-around col-start-3 col-end-5 row-start-2 py-2 border-b-2 row-end border-secondary-plus lg:border-none'>
                    <h1 className={`text-3xl font-bold ${testData.title.length > 25 && 'animate-scrollText'}`}>{testData.title}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fugiat perferendis libero facere delectus velit ipsam eligendi, unde doloribus molestiae necessitatibus expedita placeat ducimus porro nesciunt, quas repellendus qui error dignissimos laborum architecto voluptatum tempore quidem at. Facere nulla maiores at eaque voluptates dignissimos iure molestias nobis! Architecto, voluptates blanditiis. Eum soluta, porro voluptate consequatur harum assumenda qui, eaque veniam, quaerat ea inventore. Unde porro ipsam maxime reprehenderit ab placeat facere rem cum nisi, expedita voluptatum! Quae vel soluta dolor! Inventore sapiente id officia, ex ea optio explicabo minima voluptatibus debitis modi harum magnam aliquid ut veritatis pariatur doloremque accusamus.</p>
                </div>
                <div className='flex flex-col items-center col-start-2 row-start-2 row-end-3 p-2 max-sm:mt-10 justify-evenly'>
                    <img className='h-40 rounded-lg w-28' src={testData.cover} alt="cover" />
                </div>
                <div className='flex items-center justify-around col-start-2 row-start-3'>
                    <BookmarkBtn data={testData} />
                </div>
            </div>
        </div>
    )
}

export default Details
