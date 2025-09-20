import BrandComp from '@/components/brand-components/BrandComp';
import { getBrand } from '../actions/brands.action';
export const runtime = 'edge';
export default async function BrandsPage() {

  const  brands  = await getBrand();

  return (
    <div>
      <BrandComp brands={brands?.data} />
    </div>
  )
}
