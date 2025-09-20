"use client"
import { ProductDetails } from '@/app/types/productDetails.model'
import React from 'react'
import { StarRating } from 'react-flexible-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { addProductToCart } from '@/app/actions/cart.action';
import toast from 'react-hot-toast';





export default function ProductDetailsComp({ productDetails }: { productDetails: ProductDetails }) {

  const { getCartDetails } = useCart();

  async function handleAddToCart(productId: string) {

    const response = await addProductToCart(productId);
    toast.success(response?.message)
    await getCartDetails()
  }

  return (
    <div className='flex justify-between items-center gap-5 md:flex-row flex-col px-5 py-5'>
      <div className="w-full md:w-1/2">

        <Swiper

          slidesPerView={1}
          spaceBetween={3}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {productDetails?.images?.length >1 &&
          
          productDetails.images.map((src, index) => <>

            <SwiperSlide key={index}>
              <div className="relative md:h-[600px] h-[300px] w-full">
                <Image src={src}
                  fill
                  priority
                  loading='eager'
                  sizes='(max-width:768px) 100vw (max-width:1200) 50vw , 25vw'
                  alt='slider-image'
                  className='object-contain' />

              </div>




            </SwiperSlide>

          </>)}




        </Swiper>
      </div>
      <div className="w-full  md:w-1/2 ">

        <h2 className='text-3xl font-bold tracking-tighter my-7'>
          {productDetails.title}
        </h2>
        <p className='text-slate-500 my-7 text-2xl tracking-tighter'>
          {productDetails.description}
        </p>


        <div className="flex justify-between items-center ">
          <div >
            <p className='text-lg my-4'>{productDetails.category.name}</p>
            <p className='text-lg my-4'>{productDetails.price} EGP </p>
          </div>
          <div className='flex gap-2 justify-between'>
            <StarRating initialRating={Math.floor(productDetails.ratingsAverage)} dimension={6} />
            <span>{productDetails.ratingsAverage}</span>
          </div>

        </div>

        <button onClick={() => handleAddToCart(productDetails._id)} className='bg-black text-white w-full py-5 cursor-pointer rounded-lg'>+ Add To Cart</button>
      </div>

    </div>
  )
}
