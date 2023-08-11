import React from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import ManhwaBox from './ManhwaBox'

function Section({ data, title }) {
    return (
        <section className='w-full min-h-[30vh] mt-4 max-w-4xl relative'>
            <div className='border-b-4 border-dark-secondary'>
                <h2 className='mb-2 ml-2 text-lg font-bold'>{title}</h2>
            </div>
            <div className='flex gap-6 py-4 overflow-auto no-scrollbar'>
                {data.map((manhwa) => (<ManhwaBox manhwa={manhwa} />))}
            </div>
            <button className='absolute grid p-1 -right-16 top-1/2 place-content-center' type="button">
                <BsChevronRight size={40} />
            </button>
            <button className='absolute grid p-1 -left-16 top-1/2 place-content-center' type="button">
                <BsChevronLeft size={40} />
            </button>
        </section>
    )
}

export default Section;
