"use client"
import { CategoryDetails, subCategories } from '@/app/types/categoryDetails.model';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'




export default function CategoryDetailsComp({ categoryDetails, subCategories }: { categoryDetails: CategoryDetails, subCategories: subCategories[] }) {
  return (
    <div className=' pb-20'>
      <h1 className='md:text-4xl text-2xl my-10 font-bold text-center'>{categoryDetails.name}</h1>
      <div className=" flex flex-col text-center items-center justify-between p-4 ">
        <div className=" mx-auto relative h-[300px] aspect-[1/1]">
          <Image
            src={categoryDetails.image} alt={categoryDetails.name}
            className='object-cover object-top'
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
        </div>
        <div className="flex flex-col text-center w-1/2 justify-center">
        </div>
      </div>
      <div className='flex justify-center items-center mt-5 gap-5 flex-wrap'>
        {subCategories.map((Item: subCategories, index: number) => (
          <Link className=' bg-black text-white text-base rounded-3xl px-5 ' key={index} href={`/categories/${Item.category}/${Item._id}`}>
            {Item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}