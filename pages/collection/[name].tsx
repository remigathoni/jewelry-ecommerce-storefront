import Collection from "../../components/Collection/Collection";
import MainNav from "../../components/navigation/MainNav";
import { getAllInCollection } from "../../lib/supabase/products/getProducts";
import { product } from "../../lib/types/product.type";
type products = product[]
export default function Product({ products }:{products:products}) {
  return (
    <>
      <MainNav />
      <Collection products={products}/>
    </>
  );
}

export const getServerSideProps = async (context: { params: { name: string; }; }) => {
  const  collection = context.params.name;
  const products = await getAllInCollection(collection);
  return {
    props: {
      products,
    },
  };
};