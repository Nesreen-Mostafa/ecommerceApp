"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MainSlider() {
  return (
    <div className='container mx-auto'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper md:h-[600px] h-[300px]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/slider-2.jpg"
              fill
              priority
              loading='eager'
              sizes='(max-width:768px) 100vw (max-width:1200) 50vw , 25vw'
              alt='slider-image'
              className='object-cover object-top' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/slider-1.jpg" fill sizes='(max-width:768px) 100vw (max-width:1200) 50vw , 25vw' alt='slider-image' className='object-cover' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/hero.jpg" fill sizes='(max-width:768px) 100vw (max-width:1200) 50vw , 25vw' alt='slider-image' className='object-cover' />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

