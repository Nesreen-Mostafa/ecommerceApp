

import MainSlider from "@/components/slider-components/MainSlider";
import { getCategories } from "./actions/categories.action";
import CatSliderComp from "@/components/slider-components/CatSliderComp";
import { getProducts } from "./actions/products.action";
import ProductsGridSystem from "@/components/products-components/ProductsGridSystem";
import { getServerSession } from "next-auth";
import { Options } from "./api/auth/[...nextauth]/route";
import { getBrand } from "./actions/brands.action";
import BrandComp from "@/components/brand-components/BrandComp";




export default async function Home() {

  const session = await getServerSession(Options);

  if (!session) {
    return <p>You Need To Login</p>

  }


  const response = await getCategories();

  const data = response?.data;

  const products = await getProducts();

  const brands = await getBrand();




  return (
    <>
      <MainSlider />

      <div className='my-5'>
        <CatSliderComp category={data} />
      </div>

      <ProductsGridSystem products={products?.data} />
      <BrandComp brands={brands?.data} />

    </>
  );
}
