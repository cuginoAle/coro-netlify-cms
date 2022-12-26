import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Titillium_Web } from '@next/font/google';

import style from './layout.module.css';

const font = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${font.variable} font-sans ${style.mainWrapper}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
