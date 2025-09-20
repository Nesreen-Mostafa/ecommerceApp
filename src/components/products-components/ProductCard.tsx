"use client"
import { addProductToCart } from '@/app/actions/cart.action'
import { addProductToWishlist, removeProductFromWishlist } from '@/app/actions/wishlist.action'
import { useCart } from '@/app/context/CartContext'
import { useWishlist } from '@/app/context/WishlistContext'
import { Products } from '@/app/types/product.model'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart, ShoppingCart, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { StarRating } from 'react-flexible-star-rating'
import toast from 'react-hot-toast'


export default function ProductCard({ product }: { product: Products }) {

  const { getCartDetails } = useCart();
  const { getWishlistDetails, wishlistDetails } = useWishlist();
  async function handleAddToCart(productId: string) {

    const response = await addProductToCart(productId);

    toast.success(response?.message)
    await getCartDetails()
  }

  async function handleaddProductToWishlist(productId: string) {

    const response = await addProductToWishlist(productId);

    toast.success(response?.message)
    await getWishlistDetails()
  }
  async function handleRemoveProductToWishlist(productId: string) {

    const response = await removeProductFromWishlist(productId);

    toast.success(response?.message)
    await getWishlistDetails()
  }
  const isInWishlist = wishlistDetails?.data.some((item) => item._id === product._id);

  return (
    <div>
      <Card className='relative group overflow-hidden'>
        <div className="absolute z-1 top-[150px] md:right-[-100px] right-0 flex flex-col gap-3 group-hover:right-0 transition-all duration-500">
          <button onClick={() => handleAddToCart(product._id)} className="px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer">
            <ShoppingCart /></button>
          {
            isInWishlist ?
              <button onClick={() => handleRemoveProductToWishlist(product._id)} className='px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer'>
                <Heart
                  fill={isInWishlist ? "red" : "none"}
                  color={isInWishlist ? "red" : "black"}
                /></button>
              :
              <button onClick={() => handleaddProductToWishlist(product._id)} className='px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer'>
                <Heart
                  fill={isInWishlist ? "red" : "none"}
                  color={isInWishlist ? "red" : "black"}
                /></button>
          }

          <button className='px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer'>
            <Link href={`/products/${product._id}`}>
              <ZoomIn />
            </Link>
          </button>

        </div>

        <CardHeader>
          <CardTitle>{product.title.split(" ").slice(0, 2).join()}</CardTitle>
          <CardDescription>{product.description.split(" ").slice(0, 4).join()}</CardDescription>

        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px]">
            <Image src={product.imageCover} alt={product.title} className=' object-contain ' fill sizes='(max-width:768px) 100vw , (max-width:1200) 50vw ,25vw' />
          </div>

        </CardContent>
        <CardFooter className='flex-col items-start'>
          <h2 className='text-lg font-bold py-2'>Price: <span>{product.price}</span> EGP</h2>
          <StarRating initialRating={Math.floor(product.ratingsAverage)} dimension={6} />
        </CardFooter>
      </Card>
    </div>

  )
}
