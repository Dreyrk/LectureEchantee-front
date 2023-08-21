import React from 'react';

import useThemeContext from '../hooks/useThemeContext';
import PageHeader from '../components/PageHeader';
import Carousel from '../components/Carousel';
import Section from '../components/Section';

function Home() {
    const { theme } = useThemeContext();

    const sections = [
        {
            title: "Popular",
            url: "manhwa/all"
        },
        {
            title: "Popular",
            url: "manhwa/all"
        },
        {
            title: "Popular",
            url: "manhwa/all"
        },
        {
            title: "Popular",
            url: "manhwa/all"
        },
        {
            title: "Popular",
            url: "manhwa/all"
        },
        {
            title: "Popular",
            url: "manhwa/all"
        },
    ];


    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className='main'>
                <div className='lg:grid lg:place-content-center'>
                    <Carousel />
                    {sections.map((s, i) => (<Section key={i} url={s.url} title={s.title} />))}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;