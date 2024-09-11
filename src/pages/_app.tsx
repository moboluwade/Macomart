// src/pages/_app.js
import type { AppProps } from 'next/app';
import { CartProvider } from '@/context/cartContext';
import RootLayout from '../app/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </RootLayout>
  );
}

export default MyApp;
