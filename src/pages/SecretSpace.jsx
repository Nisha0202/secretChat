import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your components
import Logo from '../components/Logo';
import Search from '../components/Search';
import Card from '../components/Card';
import './Space.css';

export default function SecretSpace() {

  // Swiper instance reference
  const [swiperRef, setSwiperRef] = useState(null);

  // Slides array
  const slides = Array.from({ length: 100 }).map(
    (el, index) => <Card key={index} />
  );

  // Slide to a specific slide
  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };


  return (
    <>
      <div className='fullscreen-container Lato py-16'>
        <div className='content-container flex flex-col items-center md:px-8 px-4 lg:px-0'>
          <Logo />
          <Search />
          <Swiper
            onSwiper={setSwiperRef}
            grabCursor={true}
            initialSlide={0}
            centeredSlides={false}
            loop={true}
            slidesPerView={'auto'}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper_container"
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
                spaceBetween: 20, // Set the desired space between slides
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                {slide}
              </SwiperSlide>
            ))}
          </Swiper>


          {/*scroll to start or end */}
          <p className="append-buttons md:flex md:justify-between w-full hidden">
            <button onClick={() => slideTo(1)}
              className="prepend-slide btn btn-sm w-16 bg-gray-light2 border-0  text-mygray">first </button>
            <button onClick={() => slideTo(90)}
              className="slide-500 btn btn-sm w-16 bg-gray-light2 border-0  text-mygray">last</button>
          </p>

          {/* create Chat room */}
          <div className="lg:tooltip my-4" data-tip="Creat New Chat">
            <button className="text-2xl text-mypink"> <h2 className='tienne text-sm
             text-mypink btn btn-sm btn-ghost hover:bg-mygray'>Create Your Own Space</h2> </button>
          </div>

        </div>
      </div>
    </>
  );
}
