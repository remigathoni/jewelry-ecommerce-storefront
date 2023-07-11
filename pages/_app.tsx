import type { AppProps } from "next/app"
import CartProvider from "../context/cartProvider"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>)
}

export default MyApp
