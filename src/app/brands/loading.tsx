import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function LoadingPage() {
  return (
    <div className='flex flex-col h-screen justify-center align-middle items-center'>
       <LoaderCircle className='animate-spin'  size={50}/>
       <p className='text-3xl'>Loading.....</p>
    </div>
  )
}
