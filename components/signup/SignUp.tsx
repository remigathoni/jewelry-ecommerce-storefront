// /* eslint-disable @typescript-eslint/no-misused-promises */
// "use client"

// import { useRouter } from "next/router"
// import supabase from "../../lib/supabase/supabase"
import styles from "./signin.module.scss"

// export default function SignUp() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [error, seterror] = useState("")
//   const router = useRouter()
 

//   const handleSignUp = async () => {
//     if(!email || !password) return
//     try {
//       const {data, error} = await supabase.auth.signUp({
//         email,
//         password
//       })
//       if(error) {
//         seterror(error.message)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     router.reload()
//   }

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.reload()
//   }
//   const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     if(!email || !password) return
//     await handleSignUp()
//   }

//   return (
    // <form className={styles.container} onSubmit={handleSubmit}>
    //   {error && <small style={{paddingBottom: "10px", color: "red"}}>{error}</small>}
    //   <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     required
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   />
    //   <button  type="submit">Sign Up</button>
    //   <p>Already registered? <Link href={"/auth/login"}>Sign in.</Link></p>
    //   {/* <button onClick={handleSignIn}>Sign in</button>
    //   <button onClick={handleSignOut}>Sign out</button> */}
    // </form>
//   )
// }

'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';



const SignUp = () => {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, seterror] = useState("")

  async function handleSubmit() {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      // redirectTo: `${window.location.origin}/auth/callback`,
    });

    if (error) {
      seterror(error.message);
    }
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
      <button  type="submit">Sign Up</button>
      <p>Already registered? <Link href={"/auth/login"}>Sign in.</Link></p>
      {/* <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button> */}
    </form>
  );
};

export default SignUp;