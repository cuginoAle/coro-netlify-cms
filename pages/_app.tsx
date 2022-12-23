import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Titillium_Web } from '@next/font/google';
import Head from 'next/head';

const font = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coro San Giovanni - Cassino</title>
      </Head>
      <main className={`${font.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
