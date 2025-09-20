import { Categories } from '@/app/types/category.model'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ cat }: { cat:Categories }) {
  return (
    <Link href={`/categories/${cat._id}`} className='md:w-[250px] w-1/3'>

      <div className="relative md:h-[250px] h-[150px] aspect-[1/1] w-full rounded-full overflow-hidden">
        <Image src={cat.image}
          fill
          loading='eager'
          sizes='(max-width:768px) 100vw (max-width:1200) 50vw , 25vw'
          alt='slider-image'
          className='object-cover' />

      </div>

      <p className='text-center text-2xl pt-5 font-bold'>{cat.name}</p>

    </Link>
  )
}
