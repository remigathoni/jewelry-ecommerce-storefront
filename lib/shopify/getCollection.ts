import { ShopifyData } from "./queryShopify"


export async function getAllProductsInCollection(collection:string) {
    const query = `
    {
        collectionByHandle(handle: "${collection}") {
          handle
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
    }
  `
    const response = await ShopifyData(query)
    if(!response) {
      return []
    }
    const allProducts = response.data.collectionByHandle.products.edges
    const adjustedProducts = allProducts.map((product: { node: { id: string; title: string; handle: string; priceRange: { minVariantPrice: { amount: string } }; images: { edges: { node: { url:string, altText: string } }[] } } }) => {
      return (
        {
          id: product.node.id,
          title: product.node.title,
          handle: product.node.handle,
          price: product.node.priceRange.minVariantPrice.amount,
          images: adjustImages(product.node.images.edges)
        }
      )
    })
    return adjustedProducts
  }

  type images =   {
        node: {
            url: string;
            altText: string;
        };
    }[];
  
  const adjustImages = (images:images) => {
    return images.map((image, index) => {
      return {
        url: image.node.url,
        altText: image.node.altText
      }
    })
  }

  export async function getNewCollection(collection:string) {
    const query = `
    {
        collectionByHandle(handle: "${collection}") {
          handle
          products(first: 6) {
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
                images(first: 2) {
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
    }
  `
    const response = await ShopifyData(query)
    if(!response) {
      return []
    }
    const allProducts = response.data.collectionByHandle.products.edges
    const adjustedProducts = allProducts.map((product: { node: { id: string; title: string; handle: string; priceRange: { minVariantPrice: { amount: string } }; images: { edges: { node: { url:string, altText: string } }[] } } }) => {
      return (
        {
          id: product.node.id,
          title: product.node.title,
          handle: product.node.handle,
          price: product.node.priceRange.minVariantPrice.amount,
          images: adjustImages(product.node.images.edges)
        }
      )
    })
    return adjustedProducts
  }

  export async function getDiscoverCollection(collection:string) {
    const query = `
    {
        collectionByHandle(handle: "${collection}") {
          handle
          products(first: 3) {
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
                images(first: 2) {
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
    }
  `
    const response = await ShopifyData(query)
    if(!response) {
      return []
    }
    const allProducts = response.data.collectionByHandle.products.edges
    const adjustedProducts = allProducts.map((product: { node: { id: string; title: string; handle: string; priceRange: { minVariantPrice: { amount: string } }; images: { edges: { node: { url:string, altText: string } }[] } } }) => {
      return (
        {
          id: product.node.id,
          title: product.node.title,
          handle: product.node.handle,
          price: product.node.priceRange.minVariantPrice.amount,
          images: adjustImages(product.node.images.edges)
        }
      )
    })
    return adjustedProducts
  }