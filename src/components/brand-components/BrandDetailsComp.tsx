"uses client"
import { BrandDetails } from '@/app/types/brandDetails.model'
import Image from 'next/image';
import React from 'react'



export default function BrandDetailsComp({ brandDetails }: { brandDetails: BrandDetails}) {
       return (
    <div> 
      <div className="p-4 ">
                    <div className=" mx-auto relative  aspect-[1/1] h-[200px] my-28">
                        <Image
                         src={brandDetails.image} alt={brandDetails.name}
                         className='object-contain'
                          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                    </div>
                    <div className="flex flex-col text-center justify-center">
                      <p>{brandDetails.name}</p>
                      <p>@{brandDetails.slug}</p>
                    </div>
                    
                </div>
    </div>
  );
}