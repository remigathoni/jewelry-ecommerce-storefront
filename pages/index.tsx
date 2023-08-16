import type { NextPage } from "next"
import Head from "next/head"

import Basics from "../components/basics/Basics"
import Discover from "../components/discover/Discover"
import Featured from "../components/featured/Featured"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Instagram from "../components/instagram/Instagram"
import MainNav from "../components/navigation/MainNav"
import Subscription from "../components/subscription/Subscription"
import { getCollection } from "../lib/supabase/products/getProducts"
import styles from "../styles/Home.module.css"



type product = {
  id: string,
    created_at: string,
    product: string,
    status: boolean,
    inventory: bigint,
    category: string,
    image: string,
    description: string,
    price: number,
    collection: string,
    featured: boolean,

}
interface idata {
  basic: product[],
  discover: product[]
}
const Home: NextPage<idata> = ({basic, discover}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahlia Jewelry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <MainNav/>
      <Hero/>
      <Discover discover={discover}/>
      <Basics basics={basic}/>
      <Featured/>
      <Subscription/>
      <Instagram/>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const discover = await getCollection("bloom", 3)
  const basic = await getCollection("basic", 5)
  return {
    props: { discover:discover?discover:[], basic: basic?basic:[] },
    revalidate: 60
  }
}
export default Home
