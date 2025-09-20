"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getCashPayment, getOnlinePayment } from '../actions/payment.action'
import { useCart } from '../context/CartContext'

interface ShippingAddress {
  details: string;
  city: string;
  phone: string;
}

export default function CheckoutPage() {
  const [errorMessage] = useState<string | null>(null);
  const router = useRouter();
  const { cartDetails, setCartDetails } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(null);
  const cartId = cartDetails?.cartId;

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingAddress>();

  async function onSubmit(value: ShippingAddress) {

    const payload = {
      details: value.details,
      city: value.city,
      phone: value.phone,
    };

    if (paymentMethod === "cash") {
      try {
        const response = await getCashPayment(cartId as string, payload);

        if (response?.data.status === "success") {
          setCartDetails(null);
          router.push("/");
        }
      } catch (error) {
        console.error("Cash payment error:", error);
      }
    } 
    
    if (paymentMethod === "online") {
      try {
        const response = await getOnlinePayment(cartId as string, payload);

        if (response?.data.status === "success") {
          window.location.href = response.data.session.url;
        }
      } catch (error) {
        console.error("Online payment error:", error);
      }
    }
  }

  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>Payment</h2>
      {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          placeholder='Your Details'
          className='p-5 my-5'
          {...register("details", { required: "Details is required" })}
        />
        {errors.details && <p className='text-red-600'>{errors.details.message}</p>}

        <Input
          type='text'
          placeholder='Your CITY'
          className='p-5 my-5'
          {...register("city", { required: "City is required" })}
        />
        {errors.city && <p className='text-red-600'>{errors.city.message}</p>}

        <Input
          type='tel'
          placeholder='Your Phone'
          className='p-5 my-5'
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}

        <RadioGroup 
          onValueChange={(val) => setPaymentMethod(val as "online" | "cash")} 
          className='my-5'
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash">Cash Payment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online">Online Payment</Label>
          </div>
        </RadioGroup>

        <Button type='submit' className='px-7 py-5'>CheckOut</Button>
      </form>
    </div>
  );
}
