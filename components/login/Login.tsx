/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import supabase from "../../lib/supabase/supabase"
import styles from "./Login.module.scss"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, seterror] = useState("")
  const router = useRouter()
  useEffect( () => {
    async function getUser() {
      
      const {data, error} = await supabase.auth.getUser()
      if(data.user) {
        router.push("/")
      }
    }
    void getUser()
  }, [router])
  

  const handleSignUp = async () => {
    if(!email || !password) return
    try {
      const {data, error} = await supabase.auth.signUp({
        email,
        password
      })
      seterror(error?.message)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignIn = async () => {
    if(!email || !password) return
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      seterror(error?.message)
      
      if(data.session) {
        router.back()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.reload()
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if(!email || !password) return
    await handleSignIn()
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {error && <small style={{paddingBottom: "10px", color: "red"}}>{error}</small>}
      <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button  type="submit">Sign in</button>
      <p>Not signed up? <Link href={"/auth/signup"}>Register.</Link></p>
      {/* <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button> */}
    </form>
  )
}