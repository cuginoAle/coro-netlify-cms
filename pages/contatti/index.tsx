/* eslint-disable @next/next/no-img-element */
import { Contatti } from 'components/contatti/contatti';
import { Heading } from 'components/heading/heading';
import CustomLink from 'components/link/link';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from 'pages/layout';
import { cinquePerMilleProps, ContattoProps, GlobalProps } from 'types';

interface ContattiPageProps {
  contatti: {
    membri: ContattoProps[];
    cinquePerMille: cinquePerMilleProps[];
  };
  settings: GlobalProps;
}

const fileTypes: Record<string, string> = {
  pdf: 'pdf.svg',
  doc: 'doc.svg',
};

const ContattiPage = ({ contatti, settings }: ContattiPageProps) => {
  const { cinquePerMille } = contatti;
  console.log(contatti);

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
        <title>{settings.title} - Contatti</title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col m-4 md:m-12 gap-16">
          <div>
            <Heading>Comitato direttivo</Heading>
            <Contatti {...contatti} />
          </div>

          <div>
            <Heading>Cinque per mille</Heading>
            <ul className="flex flex-col gap-4">
              {cinquePerMille &&
                cinquePerMille.map((cinque) => {
                  const fileType =
                    cinque.fileUrl?.split('.').pop() || 'doc.svg';
                  return (
                    <li key={cinque.anno}>
                      <Link
                        href={cinque.fileUrl}
                        passHref
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-2 items-center"
                      >
                        <div className="p-2 bg-slate-300 rounded-sm">
                          <img
                            src={`/assets/${fileTypes[fileType] || 'doc.svg'}`}
                            alt={cinque.anno.toString()}
                            width={30}
                            height={30}
                          />
                        </div>
                        <span>{cinque.anno}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <CustomLink href="/" className="text-xl font-light my-8 self-start">
            &lt; indietro
          </CustomLink>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const contatti = getFile('contatti.json');
  const settings = getFile('settings.json');

  return {
    props: {
      contatti,
      settings,
    },
  };
}

export default ContattiPage;
