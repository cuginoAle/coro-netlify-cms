import { Heading } from 'components/heading/heading';
import CustomLink from 'components/link/link';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Script from 'next/script';
import Layout from 'pages/layout';
import ReactMarkdown from 'react-markdown';
import { GlobalProps, StoriaProps } from 'types';
import style from './style.module.css';

interface StoriaPageProps {
  data: StoriaProps;
  settings: GlobalProps;
}

const Storia = (props: StoriaPageProps) => {
  const { settings, data } = props;
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XG9P3JS5XJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XG9P3JS5XJ');
        `}
      </Script>
      <Head>
        <title>{settings.title} - Storia del coro</title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col m-4 md:m-12">
          <Heading>Storia del coro</Heading>

          <div className={style.wrapper}>
            <ReactMarkdown className="MD text-lg whitespace-pre-wrap emphasys">
              {data.storia as string}
            </ReactMarkdown>
          </div>
          <CustomLink href="/" className="text-xl font-light my-8 self-start">
            &lt; indietro
          </CustomLink>
        </section>
      </Layout>
    </>
  );
};

// getStaticProps
export const getStaticProps = async () => {
  const data = getFile('storia.json');
  const settings = getFile('settings.json');

  return {
    props: {
      data,
      settings,
    },
  };
};

export default Storia;
