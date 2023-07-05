import MainNav from "../../components/navigation/MainNav";
import ProductDetails from "../../components/productDetails/ProductDetails";
import { getProduct } from "../../lib/supabase/products/getProducts";
import { product } from "../../lib/types/product.type";
export default function Product({ product }:{product:product}) {
  return (
    <>
      <MainNav />
      <ProductDetails product={product[0]}/>
      {/* <Collection product={product}/> */}
    </>
  );
}

export const getServerSideProps = async (context: { query: { productid: string; }; }) => {
  const  {productid} = context.query;
  const product = await getProduct(productid);
  return {
    props: {
      product,
    },
  };
};