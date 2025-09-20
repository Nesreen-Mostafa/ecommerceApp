import React from 'react'
import { getCategories } from '../actions/categories.action';
import CategoryCard from '@/components/category-components/CategoryCard';
import { CategoryDetails } from '@/app/types/categoryDetails.model';
export const runtime = 'edge';

export default async function CategoriesPage() {
  const response = await getCategories();
  return (
    <div className=' container mx-auto'>
      <h1 className='text-center md:text-4xl text-2xl my-10 font-bold'>Categories</h1>
      <div className='flex flex-wrap justify-center gap-20'>
        {response?.data.map((item: CategoryDetails, index: number) => (
            <CategoryCard cat={item} key={item._id || index} />
        ))}
      </div>
    </div>

  )
}
