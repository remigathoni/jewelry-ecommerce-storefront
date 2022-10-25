import { ShopifyData } from "./queryShopify"

export async function getAllProducts() {
    const query = `
    {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
  `
    const response = await ShopifyData(query)
    if(!response) {
      return []
    }
    const allProducts = response.data.products.edges
    const adjustedProducts = allProducts.map((product: { node: { id: string; title: string; handle: string; priceRange: { minVariantPrice: { amount: string } }; images: { edges: { node: { url:string, altText: string } }[] } } }) => {
      return (
        {
          id: product.node.id,
          title: product.node.title,
          handle: product.node.handle,
          price: product.node.priceRange.minVariantPrice.amount,
          image: product.node.images.edges[0].node.url,
          imageAlt: product.node.images.edges[0].node.altText,
        }
      )
    })
    return adjustedProducts
  }
