import Collection from "../../../components/Collection/Collection";
import MainNav from "../../../components/navigation/MainNav";
import ProductDetails from "../../../components/productDetails/ProductDetails";
import { getProduct } from "../../../lib/supabase/products/getProducts";
import { product } from "../../../lib/types/product.type";




const getProductDetails = async (id:string) => {
  const data = await getProduct(id)

  return data;
};

export default async function Product({
searchParams,
}: {
searchParams: { [key: string]: string  }
}) {
  console.log(searchParams.productid)
  const product = await getProductDetails(searchParams.productid);
  return (
    <>
      <MainNav />
      <ProductDetails product={product[0]}/>
      {/* <Collection product={product}/> */}
    </>
  );
}

// export const getServerSideProps = async (context: { query: { productid: string; }; }) => {
//   const  {productid} = context.query;
//   const product = await getProduct(productid);
//   return {
//     props: {
//       product,
//     },
//   };
// };