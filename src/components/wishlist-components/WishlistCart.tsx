"use client"

import { useWishlist } from '@/app/context/WishlistContext'
import ProductCard from '../products-components/ProductCard';

export default function WishlistCart() {
    const { wishlistDetails } = useWishlist();
    return (
        <div className=' container mx-auto'>
            <h2 className="md:text-4xl text-2xl text-center tracking-tighter font-bold my-10">Wishlist </h2>

            <div className='flex flex-wrap'>
                {wishlistDetails?.data.map((item, index) => (
                    <div className='w-1/3' key={index} >
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}
