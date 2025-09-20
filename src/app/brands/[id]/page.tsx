import { getBrandDetails } from '@/app/actions/brands.action';
import BrandDetailsComp from '@/components/brand-components/BrandDetailsComp';
import React from 'react'

export default async function BrandDetails({ params }: { params: { id: string } }) {

    const  brandDetails  = await getBrandDetails(params.id);

    
    return (
        <div className='container mx-auto'>
            <BrandDetailsComp brandDetails={brandDetails?.data.data} />
        </div>
    )
}
