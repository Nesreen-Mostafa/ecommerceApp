"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function LoginPage() {
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter()

  interface Inputs {

    email: string;
    password: string;


  }
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  async function onSubmit(value: Inputs) {
    try {
      const response = await signIn("credentials", {
        email: value.email,
        password: value.password,
        redirect: false,
      })
      if (response?.ok) {
        router.push("/")
      }
    } catch (error) {
    }

  }

  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>
        Login
      </h2>
      {errorMessage && <p className='text-center text-red-600'>{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>


        <Input type='email' placeholder='Your Email' className='p-5 my-5'
          {...register("email", { required: "Email is required" })} />
        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

        <Input type='password' placeholder='Your Password' className='p-5 my-5'
          {...register("password", { required: "Password is required" })} />
        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

        <div className="flex justify-between items-center mb-5">
          <Link
            href="/forgetpassword"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type='submit' className='px-7 py-5'>Login</Button>

      </form>


    </div>
  )
}
