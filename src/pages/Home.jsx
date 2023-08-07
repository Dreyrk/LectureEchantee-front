import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import PageHeader from '../components/PageHeader';

function Home() {
    return (
        <div className='bg-primary'>
            <PageHeader />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="https://mangas-origines.fr/wp-content/uploads/2023/06/the_player_who_can_t_level_up_18064-300x420.webp" alt="test" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.manga-news.com/public/images/vols/Tower_of_God_1_ototo.jpg" alt="test" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.nautiljon.com/images/actualite/00/03/1667750993652_image.webp" alt="test" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Home;