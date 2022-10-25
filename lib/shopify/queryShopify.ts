const storefrontAccessToken = "1a01d832351367303e1091d1f107d03a"

export async function ShopifyData(query:string) {
    const URL = `https://wuudenplanters.myshopify.com/api/2022-10/graphql.json`
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query })
    }
  
    try {
      const data = await fetch(URL, options).then((response: { json: () => any }) => {
        return response.json()
      })
  
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }
