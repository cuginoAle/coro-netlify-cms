/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from './index.module.css';
import Head from 'next/head';
import Layout from './layout';
import CustomLink from 'components/link/link';
import { getCollection } from 'helpers/collection';
import { getFile } from 'helpers/getFile';

import { Heading } from 'components/heading/heading';
import {
  ComposizioneProps,
  EventProps,
  GlobalProps,
  HomeProps,
  InEvidenzaProps,
  RicordiProps,
} from 'types';
import Script from 'next/script';
import { EventsList } from 'components/eventsList/eventsList';
import Link from 'next/link';
import RidordiList from 'components/ridordiList/ridordiList';
import { ContattiProps } from 'components/contatti/contatti';

interface HomePageProps {
  data: HomeProps;
  settings: GlobalProps;
  events: EventProps[];
  inEvidenza: InEvidenzaProps;
  ricordi: RicordiProps[];
  composizione: ComposizioneProps;
  contatti: ContattiProps;
}
const Home = (props: HomePageProps) => {
  const { settings, inEvidenza, data, composizione, contatti } = props;
  const { intro, picture, history, promo } = data;

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
        <title>{settings.title}</title>
      </Head>

      <Layout {...settings}>
        <section
          className={style.hero}
          style={{ '--hero-img': `url(${picture})` }}
        ></section>

        <section className="m-4 md:m-8 md:flex gap-14 items-end text-2xl md:text-3xl">
          <img
            src="/images/fulvio.png"
            alt="fulvio"
            className="w-1/4 min-w-[120px] shrink-0 mr-4 float-left md:float-none md:mr-0"
          />
          <ReactMarkdown className="MD citazioni" remarkPlugins={[remarkGfm]}>
            {intro}
          </ReactMarkdown>
        </section>

        <section className="p-8 text-center m-4 md:m-8 highlighted">
          <Link
            href="/inevidenza"
            passHref
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-3xl">{inEvidenza.short_title}</h2>

            {inEvidenza.short_description && (
              <ReactMarkdown className="MD" remarkPlugins={[remarkGfm]}>
                {inEvidenza.short_description}
              </ReactMarkdown>
            )}

            {inEvidenza.picture && (
              <Image
                src={inEvidenza.picture}
                alt={inEvidenza.short_title}
                width={300}
                height={300}
              />
            )}
          </Link>
        </section>

        <section className="m-4 md:m-8 ">
          <EventsList events={props.events} />
        </section>
        <section className={style.promo}>
          <ReactMarkdown
            className={style.promoContent}
            remarkPlugins={[remarkGfm]}
          >
            {promo}
          </ReactMarkdown>
        </section>

        <section className="m-4 md:m-8  text-xl flex flex-col">
          <Heading>Composizione corale</Heading>
          <ReactMarkdown
            className="MD whitespace-pre-wrap"
            remarkPlugins={[remarkGfm]}
          >
            {composizione.descrizione}
          </ReactMarkdown>
          <CustomLink href="/composizione" className="self-end">
            ...continua
          </CustomLink>
        </section>

        <section className="m-4 md:m-8 text-xl flex flex-col">
          <Heading>La storia</Heading>
          <ReactMarkdown
            className="MD whitespace-pre-wrap"
            remarkPlugins={[remarkGfm]}
          >
            {history}
          </ReactMarkdown>
          <CustomLink href="/storia" className="self-end">
            ...continua
          </CustomLink>
        </section>

        <section className="m-4 md:m-8 ">
          <Heading>Ricordi fotografici</Heading>
          <RidordiList ricordi={props.ricordi} />
        </section>

        <section className="m-4 md:m-8 text-xl flex flex-col">
          <Heading href={'/contatti'}>Contatti</Heading>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const events = getCollection('eventi');
  const ricordi = getCollection('ricordi').map((ricordo: RicordiProps) => {
    return {
      ...ricordo,
      foto: ricordo.foto.slice(0, 4),
    };
  });

  const inEvidenza = getFile('in_evidenza.json');
  const data = getFile('home.json');
  const settings = getFile('settings.json');
  const composizione = getFile('composizione.json');
  const history = getFile('storia.json');
  const contatti = getFile('contatti.json');

  return {
    props: {
      data: {
        ...data,
        history: history.storia.substr(0, 320) + '...',
      },
      settings,
      events,
      inEvidenza,
      ricordi,
      contatti,
      composizione: {
        ...composizione,
        descrizione: composizione.descrizione.substr(0, 300) + '...',
      },
    },
  };
}

export default Home;
