"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import axios from 'axios';

interface Inputs {

  password: string;
  email: string;
}

export default function ResetPassword() {
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, }, } = useForm<Inputs>();

  async function onSubmit(value: Inputs) {

    try {
      const response = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", { email: value.email, newPassword: value.password }
      )


      if (response?.data?.message === "success") {
        router.push("/login")
      }

      seterrorMessage(null)

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        seterrorMessage(error.response?.data.message)
      }
    }
  }


  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>
        Reset Password
      </h2>
      {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>

        <Input type='email' placeholder='Your Email' className='p-5 my-5'
          {...register("email", { required: "Email is required" })} />
        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

        <Input type='password' placeholder='Your New Password' className='p-5 my-5'
          {...register("password", { required: "Password is required" })} />
        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}


        <Button type='submit' className='px-7 py-5'>Login</Button>

      </form>


    </div>
  )
}
