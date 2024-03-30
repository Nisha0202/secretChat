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
        <div className='content-container flex flex-col items-center'>
          <Logo />
          <Search />
          <Swiper
            onSwiper={setSwiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
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
            <button onClick={() => slideTo(1)} className="prepend-slide btn btn-sm w-16 bg-myblack border-2 border-mygray text-mygray"> start </button>
            <button onClick={() => slideTo(500)} className="slide-500 btn btn-sm w-16 bg-myblack border-mygray text-mygray">  end          </button>

          </p>
        </div>
      </div>
    </>
  );
}
