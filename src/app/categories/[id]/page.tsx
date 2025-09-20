import { getCategoryDetails, getSubCategory } from '@/app/actions/categories.action';
import CategoryDetailsComp from '@/components/category-components/CategoryDetailsComp';
import React from 'react'
export const runtime = 'edge';
export default async function CategoryDetails({ params }: { params: { id: string } }) {

    const categoryDetails = await getCategoryDetails(params.id);
    const Subcategories = await getSubCategory(params.id)

    return (
        <div className='container mx-auto'>
            <CategoryDetailsComp categoryDetails={categoryDetails?.data.data} subCategories={Subcategories?.data} />
        </div>
    )
}
