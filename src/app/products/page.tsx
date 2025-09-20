import React from 'react'
import { getProducts } from '../actions/products.action';
import ProductsGridSystem from '@/components/products-components/ProductsGridSystem';



export default async function ProductsPage() {
  const  products = await getProducts();


  
  return (
    <div>
          <ProductsGridSystem
           products={products?.data}
           />
      
    </div>
  )
}
