
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Logo from '../components/Logo';
import Search from '../components/Search';
import Card from '../components/Card';

export default function SecretSpace() {
  const [swiperRef, setSwiperRef] = useState(null);
    // Create array with 100 Card components
    const [slides, setSlides] = useState(
      Array.from({ length: 100 }).map((_, index) => <Card key={index} />)
    );

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <>
      <div className='fullscreen-container Lato py-16'>
        <div className='content-container flex flex-col items-center'>
          <Logo/>
          <Search/>
          <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        centeredSlides={true}
      
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
        }} >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons md:flex md:justify-between w-full hidden">
        <button onClick={() => slideTo(1)} className="prepend-slide btn btn-sm w-16 bg-myblack">
          start
        </button>
        <button onClick={() => slideTo(500)} className="slide-500 btn btn-sm w-16 bg-myblack">
          end
        </button>

      </p>
         
        </div>
      </div>
    </>
  );
}
