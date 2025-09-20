"use client"
import { useCart } from '@/app/context/CartContext'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Badge } from '../ui/badge'


export default function TableCart() {
    const { cartDetails , getCartDetails} = useCart();

    async function removeProductFromCart(productId: string){
        
        toast.success("Product removed from cart successfully")
        await getCartDetails()

    }

    async function updateProductFromCart(productId: string , count: number){
        
        toast.success("Product updated")
        await getCartDetails()

    }
    return (
        <>

        {cartDetails ? <div className='w-3/4 mx-auto my-10'>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="p-6 text-center">Products</TableHead>
                        <TableHead className="p-6 text-center">Price</TableHead>
                        <TableHead className="p-6 text-center">Quantity</TableHead>
                        <TableHead className="p-6 text-center">SubTotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cartDetails?.data?.products?.map((product) =>
                        <TableRow key={product._id}>
                            <TableCell className="font-medium p-3 text-center">
                                <div className='flex text-center justify-center items-center gap-4'>
                                    <div className='relative'>
                                        <Badge onClick={()=> removeProductFromCart(product.product._id)} className='absolute top-[-10] left-[-10] cursor-pointer'>
                                            x
                                        </Badge>
                                        <Image src={product.product.imageCover}
                                            width="60" height="60" alt="image" />
                                    </div>
                                    <p>{product.product.title.split(" ").slice(0,2).join(" ")}</p>
                                </div>
                            </TableCell>
                            <TableCell className='p-3 text-center'>{product.price} EGP</TableCell>
                            <TableCell className='p-3'>
                                <div className="flex text-center items-center justify-center gap-2">
                                    <button onClick={()=> updateProductFromCart(product.product._id , product.count+1)} className='border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer'>
                                        +
                                     </button>
                                    <p>{product.count}</p>
                                    <button onClick={()=> updateProductFromCart(product.product._id , product.count-1)} className='border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer'>
                                        -
                                    </button>
                                </div>
                            </TableCell>
                            <TableCell className="p-3 text-center">{product.price * product.count} EGP</TableCell>
                        </TableRow>
                    )}

                    <TableRow className='bg-slate-300'>
                        <TableCell className='text-center p-6'>Total Price</TableCell>
                        <TableCell className='text-center p-6' colSpan={2}>{cartDetails?.data?.totalCartPrice} EGP</TableCell>
                        <TableCell className='text-center p-6'>

                            <button className='px-10 py-5 bg-black text-white cursor-pointer rounded-md'>
                                <Link href="/checkout">
                                    CheckOut
                                </Link>
                                
                            </button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div> : <h2 className='text-center text-3xl py-5'>You need to add products to cart</h2>}
        </>
        
    )
}
