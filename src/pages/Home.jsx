import React from 'react';

import useThemeContext from '../hooks/useThemeContext';
import PageHeader from '../components/PageHeader';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import useFetch from '../hooks/useFetch';

function Home() {
    const { theme } = useThemeContext();

    const sections = [
        {
            title: "Popular",
            url: "manhwa/all?status=Ongoing&sortBy=rating&sortOrder=desc"
        },
        {
            title: "Finished",
            url: "manhwa/all?status=Completed&sortBy=title"
        },
        {
            title: "Fantastic World",
            url: "manhwa/all?genre=Fantasy&sortBy=title"
        },
        {
            title: "Thrilling Adventures",
            url: "manhwa/all?genre=Adventure&sortBy=title"
        },
        {
            title: "laughing of loud",
            url: "manhwa/all?genre=Comedy&sortBy=title"
        },
    ];

    const { data, isLoading, isError } = useFetch("manhwa/promoted");
    console.log(data)

    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className='main'>
                <div className='lg:grid lg:place-content-center'>
                    <Carousel slides={data} />
                    {sections.map((s, i) => (<Section key={i} url={s.url} title={s.title} />))}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;