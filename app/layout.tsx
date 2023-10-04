import CartProvider from '../context/cartProvider';
import '../styles/Home.module.css';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <CartProvider>
        <div className="flex items-center flex-col p-8 space-y-10 min-h-screen">
          <main>{children}</main>
        </div>
        </CartProvider>
      </body>
    </html>
  );
}