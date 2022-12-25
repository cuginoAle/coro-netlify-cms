import { Titillium_Web } from '@next/font/google';
import Script from 'next/script';
import 'styles/globals.css';
import style from './layout.module.css';

const font = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <body>
        <main className={`${font.variable} font-sans ${style.mainWrapper}`}>
          <div className={style.mainContent}>{children}</div>
        </main>
      </body>
    </html>
  );
}
