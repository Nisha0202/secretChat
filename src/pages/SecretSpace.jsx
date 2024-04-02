import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

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

   // State for chatroom data
   const [chatroomData, setChatroomData] = useState([]);
   React.useEffect(() => {
    // Fetch chatroom data when component mounts
    fetch('chatroom.json')
      .then(response => response.json())
      .then(data => {
        // Set chatroom data
        setChatroomData(data.chatRooms);
        console.log(data.chatRooms);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []);


// Slides array
const slides = Array.isArray(chatroomData) ? chatroomData.map((data, index) => <Card key={index} data={data} />) : [];


  // Slide to a specific slide
  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  console.log(swiperRef)
  return (
    <>
      <div className='fullscreen-container Lato py-12'>
        <div className='content-container flex flex-col items-center md:px-8 px-4 lg:px-8'>
          <Logo />
          <Search />
          <Swiper
            onSwiper={setSwiperRef}
            grabCursor={true}
            initialSlide={1}
            loop={false}
            slidesPerView={'auto'} // 'auto' will size slides based on their content's width
            centeredSlides={true} // Center the active slide 
            
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper_container"
        
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
          <div className="lg:tooltip my-2" data-tip="Creat New Chat">
            <button className="text-2xl text-mypink"> <h2 className='tienne text-sm
             text-mypink btn btn-sm btn-ghost hover:bg-mygray'>Create Your Own Space</h2> </button>
          </div>

        </div>
      </div>
    </>
  );
}
