import Footer from "../../../components/footer/Footer";
import Login from "../../../components/login/Login";
import MainNav from "../../../components/navigation/MainNav";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function login() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data:{user}
  } = await supabase.auth.getUser();

  if(user) {
    redirect("/?message=Logged in")
  }
  
  return (
    <div>
      <MainNav/>
      <Login/>
      <Footer/>
    </div>
  )
}
