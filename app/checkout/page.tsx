import Checkout from "../../components/checkout/checkout"
import Footer from "../../components/footer/Footer"
import MainNav from "../../components/navigation/MainNav"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
async function checkout() {
  const supabase = createServerComponentClient({ cookies });
   const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/auth/login');
  }
  return (
    <div>
      <MainNav/>
      <Checkout/>
      <Footer/>
    </div>
  )
}

export default checkout