import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import useFetch from "../hooks/useFetch.js"
import PageHeader from '../components/PageHeader';
import useThemeContext from '../hooks/useThemeContext';
import BookmarkBtn from '../components/BookmarkBtn';
import Loader from '../components/Loader.jsx';
import Comments from '../components/Comments.jsx';
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';

function Details() {
    const { id } = useParams();
    const { token } = useCurrentUserContext()
    const { theme } = useThemeContext();

    const { data, isLoading, isError, updateData } = useFetch(`manhwa/id/${id}`);

    if (!data && isLoading) {
        return <Loader />
    } else if (!data && isError) {
        return <p>ERROR</p>
    }
    else {
        return (
            <div className={`page-${theme}`}>
                <PageHeader />
                <div className="grid-cols-5 grid-rows-8 main lg:grid">
                    <div className='flex flex-col items-center col-start-2 row-start-2 row-end-3 p-2 max-sm:mt-10 justify-evenly'>
                        <img className='h-40 rounded-lg w-28' src={data?.cover} alt="cover" />
                    </div>
                    {token &&
                        <div className='flex items-center justify-around col-start-2 row-start-3'>
                            <BookmarkBtn data={data} />
                        </div>}
                    <div className='col-start-3 col-end-5 row-start-2 px-2 py-2 my-6 border-b-2 row-end border-secondary-plus lg:border-none'>
                        <h1 className={`text-3xl font-bold ${data?.title.length > 25 && 'animate-scrollText'}`}>{data?.title}</h1>
                    </div>
                    <div className='px-2'>
                        <span className='text-xl font-semibold underline'>Synopsis</span>
                        <p className='mt-4'>{data?.synopsis}</p>
                    </div>
                    <div className='flex flex-wrap gap-2 my-4'>
                        <span className='font-semibold'>Genres :</span>
                        {data?.genre.map((genre, i) => (i === data.genre.length - 1 ? <span className='font-extralight'>{genre}.</span> : <span className='font-extralight'>{genre},</span>))}
                    </div>
                    <div className="flex gap-2">
                        <span className='font-semibold'>Status :</span>
                        <span className='font-extralight'>{data?.status}</span>
                    </div>
                    <div className='flex flex-col gap-4 mt-6'>
                        {data?.chapters.map((src, i) => (<NavLink key={i} className={"px-4 py-2 border border-secondary-plus"} to={src}>
                            Chapter {i + 1}
                        </NavLink>))}
                    </div>
                    <Comments data={data} isLoading={isLoading} isError={isError} updateData={updateData} />
                </div>
            </div>
        )
    }
}

export default Details;
