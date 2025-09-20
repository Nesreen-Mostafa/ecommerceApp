"use client"
import { Categories } from '@/app/types/category.model';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import CategoryCard from '../category-components/CategoryCard';


export default function CatSliderComp({ category }: { category: Categories[] }) {

  return (
    <div className='container mx-auto my-20'>
      <h2 className=' md:text-4xl text-2xl my-10 font-bold text-center'>Categories</h2>

      <div className='flex flex-wrap justify-center gap-20'>
        {category?.map((cat, index) =>
          <CategoryCard cat={cat} key={index} />
        )}

      </div>
    </div>
  )
}
