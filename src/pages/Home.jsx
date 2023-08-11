import React from 'react';

import useThemeContext from '../hooks/useThemeContext';
import PageHeader from '../components/PageHeader';
import Carousel from '../components/Carousel';
import Section from '../components/Section';

function Home() {
    const { theme } = useThemeContext();

    const data = [
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
        {
            title: 'test',
            cover: 'https://asura.gg/wp-content/uploads/2023/07/HeavenlyDemonCover0222.png',
            chapters: [1, 1, 1, 1, 1, 1, 1]
        },
    ]

    return (
        <div className={`page-${theme}`}>
            <PageHeader />
            <div className='p-2 mt-[56px]'>
                <Carousel />
                <Section data={data} title={'Popular'} />
                <Section data={data} title={'Popular'} />
                <Section data={data} title={'Popular'} />
                <Section data={data} title={'Popular'} />
            </div>
        </div>
    )
}

export default Home;