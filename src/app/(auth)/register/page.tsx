"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import * as z from "zod";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

export default function RegisterPage() {
  const schema = z.object({
    name: z.string().nonempty("Name is required").min(3, "Not less than 3 characters"),
    email: z.string().nonempty("Email is required").email("Not valid Email"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, "Password not valid").nonempty("Password is required"),
    rePassword: z.string().nonempty("Password is required"),
    phone: z.string()
    .regex(/^(01[0125])[0-9]{8}$/, "Must be a valid Egyptian phone number"),
}).refine((data) => data.password === data.rePassword, {
  path: ["rePassword"],
  message: "Passwords do not match",

  })
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter()

  interface Inputs {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;

  }
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(
    {
      resolver:zodResolver(schema)
    }
  )

  async function onSubmit(value: Inputs) {

    try {
      const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", value)


      if (response?.data?.message === "success") {
        // login/
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
        Register
      </h2>
      {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>

        <Input type='text' placeholder='Your Name' className='p-5 my-5'
          {...register("name")} />
        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

        <Input type='email' placeholder='Your Email' className='p-5 my-5'
          {...register("email")} />
        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

        <Input type='password' placeholder='Your Password' className='p-5 my-5'
          {...register("password")} />
        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

        <Input type='password' placeholder='Your Re-Password' className='p-5 my-5'
          {...register("rePassword")} />
        {errors.rePassword && <p className='text-red-600'>{errors.rePassword.message}</p>}

        <Input type='tel' placeholder='Your Phone' className='p-5 my-5'
          {...register("phone")} />
        {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}



        <Button type='submit' className='px-7 py-5'>Register</Button>

      </form>


    </div>
  )
}
