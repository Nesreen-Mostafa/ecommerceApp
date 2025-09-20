"use client"
import { Brand } from '@/app/types/brand.model';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function BrandCard({ brand }: { brand: Brand }) {
    return (
        <Link href={`/brands/${brand._id}`} className='w-[250px] rounded-full overflow-hidden shadow p-5'>
            <div className="relative h-[200px] w-full ">
                <Image
                    src={brand.image} alt={brand.name}
                    className='object-contain w-full' 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            </div>
            <p className="text-lg font-semibold text-center">{brand.name}</p>

        </Link>
    )
}
