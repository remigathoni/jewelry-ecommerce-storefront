import AuthProvider from '../context/AuthProvider';
import CartProvider from '../context/cartProvider';
import '../styles/Home.module.css';
import '../styles/globals.css';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
export const revalidate = 0
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

     const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AuthProvider accessToken={accessToken}>
        <CartProvider>
        <div className="flex items-center flex-col p-8 space-y-10 min-h-screen">
          <main>{children}</main>
        </div>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}