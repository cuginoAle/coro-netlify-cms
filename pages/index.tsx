/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
// import { attributes, react as HomeContent } from '_data/home.md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from './index.module.css';
import Head from 'next/head';
import Layout from './layout';
import { EventCard, EventCardProps } from 'components/eventCard/eventCard';
import CustomLink from 'components/link/link';
import { getCollection } from 'helpers/getCollection';
import { getFile } from 'helpers/getFile';
import { EventsList } from 'components/eventsList/eventsList';

interface HomeProps {
  data: {
    intro: string;
    picture: string;
    history: string;
    promo: string;
  };
  settings: {
    title: string;
    subtitle: string;
  };
  events: EventCardProps[];
  inEvidenza: {
    short_title: string;
    short_description?: string;
    date: string;
    picture?: string;
  }[];
}
const Home = (props: HomeProps) => {
  const { intro, picture, history, promo } = props.data;
  const settings = props.settings;

  return (
    <>
      <Head>
        <title>{settings.title} </title>
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

        {/* <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
          In evidenza
        </h2> */}
        <section className="p-8 text-center m-4 md:m-8 highlighted">
          <ul className="flex flex-col flex-wrap">
            {props.inEvidenza.map((event) => {
              return (
                <li
                  key={event.short_title}
                  className="flex flex-col items-center gap-4"
                >
                  <h2 className="text-3xl">{event.short_title}</h2>
                  <p>{event.short_description}</p>
                  {event.picture && (
                    <Image
                      src={event.picture}
                      alt={event.short_title}
                      width={300}
                      height={300}
                    />
                  )}
                </li>
              );
            })}
          </ul>
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

        <section
          className="m-4 md:m-8 text-xl flex flex-col"
          style={{ '--line-clamp': 10 }}
        >
          <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
            La storia del coro
          </h2>
          <ReactMarkdown
            className="MD multiline-ellipsis"
            remarkPlugins={[remarkGfm]}
          >
            {history}
          </ReactMarkdown>
          <CustomLink href="/" className="self-end">
            ...continua
          </CustomLink>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const events = getCollection('eventi');
  const inEvidenza = getCollection('in_evidenza');

  const data = getFile('home.json');
  const settings = getFile('settings.json');

  return {
    props: {
      data,
      settings,
      events,
      inEvidenza,
    },
  };
}

export default Home;
