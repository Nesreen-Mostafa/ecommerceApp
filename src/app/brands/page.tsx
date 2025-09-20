import BrandComp from '@/components/brand-components/BrandComp';
import { getBrand } from '../actions/brands.action';

export default async function BrandsPage() {
  // const session = useSession();
   // if(!session.data){
  //   return <p>You Need To Login</p>
  // }
  const  brands  = await getBrand();

  return (
    <div>
      <BrandComp brands={brands?.data} />
    </div>
  )
}
