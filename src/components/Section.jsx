import React from 'react'

import ManhwaBox from './ManhwaBox'
import useFetch from '../hooks/useFetch'

function Section({ url, title }) {

    const { data, isLoading, isError } = useFetch(`${url}`);

    return (
        <section className='w-full min-h-[30vh] mt-4 max-w-4xl relative'>
            <div className='border-b-4 border-dark-secondary'>
                <h2 className='mb-2 ml-2 text-lg font-bold'>{title}</h2>
            </div>
            <div className='flex gap-6 py-4 overflow-auto no-scrollbar'>
                {data?.map((manhwa) => (<ManhwaBox isLoading={isLoading} isError={isError} key={manhwa._id} manhwa={manhwa} />))}
            </div>
        </section>
    )
}

export default Section;
