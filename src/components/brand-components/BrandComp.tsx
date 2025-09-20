import React from 'react'
import BrandCard from './BrandCard'
import { Brand } from '@/app/types/brand.model'

export default function BrandComp({ brands }: { brands: Brand[] }) {
  return (
    <div className='container mx-auto my-20'>
      <h2 className="md:text-4xl text-2xl text-center tracking-tighter font-bold my-10">Brands </h2>
      <div className='flex flex-wrap gap-5 justify-center '>
        {brands.map((brand) => <BrandCard key={brand._id} brand={brand} />)}

      </div>

    </div>
  )
}
