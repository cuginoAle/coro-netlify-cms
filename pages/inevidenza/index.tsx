/* eslint-disable @next/next/no-img-element */
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Layout from 'pages/layout';
import style from './style.module.css';
import { GlobalProps, InEvidenzaProps } from 'types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DateBanner } from 'components/dateBanner/dateBanner';
import Link from 'next/link';
import CustomLink from 'components/link/link';
import Script from 'next/script';

interface InEvidenzaPageProps {
  settings: GlobalProps;
  inEvidenza: InEvidenzaProps;
}

const fileTypes: Record<string, string> = {
  pdf: 'pdf.svg',
  doc: 'doc',
};

const InEvidenza = (props: InEvidenzaPageProps) => {
  const { settings, inEvidenza } = props;
  const {
    headings = 'in evidenza',
    description,
    picture,
    allegati,
    links,
  } = inEvidenza;

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
        <title>
          {settings.title} - {headings}
        </title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col p-4 m-4 md:m-8">
          <section className=" text-center flex gap-2 sm:gap-4 items-start">
            {inEvidenza.date && (
              <DateBanner
                className="hidden md:block"
                date={new Date(inEvidenza.date)}
              />
            )}

            <div className="flex flex-col items-center grow gap-8">
              <ReactMarkdown className="MD" remarkPlugins={[remarkGfm]}>
                {headings}
              </ReactMarkdown>
              <hr className="opacity-50 w-1/2 m-auto" />
              <div className="max-w-lg flex flex-col items-center gap-16">
                {description && (
                  <ReactMarkdown
                    className="MD text-xl whitespace-pre-wrap"
                    remarkPlugins={[remarkGfm]}
                  >
                    {description}
                  </ReactMarkdown>
                )}

                {picture && (
                  <div className="flex justify-center">
                    <img
                      src={picture}
                      alt={headings}
                      className={style.picture}
                    />
                  </div>
                )}
              </div>
              <hr className="opacity-50 w-1/2 m-auto" />
              {allegati && (
                <>
                  <h3>Allegati</h3>
                  <ul className="flex gap-8 flex-wrap max-w-lg">
                    {allegati.map((allegato) => {
                      const fileType =
                        allegato.fileUrl?.split('.').pop() || 'doc';

                      return (
                        <li key={allegato.fileUrl} className="w-full relative">
                          <span className="absolute -top-3 -left-3 w-5 h-5">
                            <img
                              src={`/assets/${allegato.lang}.svg`}
                              alt={allegato.lang}
                            />
                          </span>
                          <Link
                            href={allegato.fileUrl}
                            passHref
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-2 items-center"
                          >
                            <div className="p-2 bg-slate-300 rounded-sm">
                              <img
                                src={`/assets/${fileTypes[fileType]}`}
                                alt={allegato.title}
                                width={30}
                                height={30}
                              />
                            </div>
                            <span>{allegato.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <hr className="opacity-50 w-1/2 m-auto" />
                </>
              )}
              {links && (
                <>
                  <h3>Link esterni</h3>
                  <ul className="flex gap-8 flex-wrap max-w-lg">
                    {links.map((link) => {
                      return (
                        <li key={link.linkUrl} className="w-full relative">
                          <span className="absolute -top-3 -left-3 w-5 h-5">
                            <img
                              src={`/assets/${link.lang}.svg`}
                              alt={link.lang}
                            />
                          </span>
                          <Link
                            href={link.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-2 items-center"
                          >
                            <div className="p-2 bg-slate-300 rounded-sm">
                              <img
                                src={`/assets/link.svg`}
                                alt={link.title}
                                width={30}
                                height={30}
                              />
                            </div>
                            <span>{link.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </section>
          <CustomLink href="/" className="text-xl font-light my-8 self-start">
            &lt; indietro
          </CustomLink>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const inEvidenza = getFile('in_evidenza.json');
  const settings = getFile('settings.json');

  return {
    props: {
      settings,
      inEvidenza,
    },
  };
};

export default InEvidenza;
