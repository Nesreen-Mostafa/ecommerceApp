import { getProductDetails } from '@/app/actions/products.action';
import ProductDetailsComp from '@/components/products-components/ProductDetailsComp';

export default async function ProductDetails({params}:{params :{id:string}}) {
  const {id} = await params;
  const productDetails = await getProductDetails(id);

  return (
    <div className='container mx-auto'>
     <ProductDetailsComp productDetails={productDetails?.data}/>
    </div>
  )
}
