import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel({ slides }) {
    return (
        <Swiper
            className='max-w-4xl min-h-[30vh] max-h-[50vh]'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {slides?.map((el) => (
                <SwiperSlide>
                    <NavLink to={`/manhwa/${el._id}`}>
                        <img src={el.cover} alt={el.title} />
                    </NavLink>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel
