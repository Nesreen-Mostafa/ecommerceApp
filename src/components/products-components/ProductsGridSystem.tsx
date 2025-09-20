import { Products } from '@/app/types/product.model'
import React from 'react'
import ProductCard from './ProductCard'



export default function ProductsGridSystem({products}:{products :Products[]}) {


  return (
    <div className='container mx-auto px-5'>
      <h2 className="md:text-4xl text-2xl text-center tracking-tighter font-bold my-10">Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

        {products.map((product)=><ProductCard key={product._id}  product={product}/>)}

      </div>

    </div>
  )
}
