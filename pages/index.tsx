import type { NextPage } from "next"
import Head from "next/head"
import Basics from "../components/basics/Basics"
import Discover from "../components/discover/Discover"
import Featured from "../components/featured/Featured"
import Hero from "../components/hero/Hero"
import MainNav from "../components/navigation/MainNav"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahlia Jewelry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <MainNav/>
      <Hero/>
      <Discover/><Featured/>
      <Basics/>
      
    </div>
  )
}

export default Home
