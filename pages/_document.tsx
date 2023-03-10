import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        ></Script>
      </body>
    </Html>
  );
}
