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
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
        {
            title: "Popular",
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
        {
            title: "Popular",
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
        {
            title: "Popular",
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
        {
            title: "Popular",
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
        {
            title: "Popular",
            data: [
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
                {
                    _id: 159151,
                    title: 'test',
                    cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
                    chapters: [1, 1, 1, 1, 1, 1, 1]
                },
            ]
        },
    ]


    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className=''>
                <div className='p-2 mt-[56px] lg:grid lg:place-content-center'>
                    <Carousel />
                    {sections.map((s, i) => (<Section key={i} data={s.data} title={s.title} />))}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;