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

interface HomeProps {
  data: string;
  settings: string;
  events: EventCardProps[];
}
const Home = (props: HomeProps) => {
  const { intro, picture, history, promo } = JSON.parse(props.data);
  const settings = JSON.parse(props.settings);

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

        <section className="p-10 ">
          <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
            Prossimi eventi
          </h2>
          <ul className="flex gap-4 flex-wrap">
            {props.events.map((event) => {
              return (
                <li key={event.title} className="sm:w-1/2 md:w-1/3">
                  <EventCard {...event} className=" h-full" />
                </li>
              );
            })}
          </ul>
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
          className="mb-5 p-10 text-xl flex flex-col"
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
  // reading the vents folder
  const fs = require('fs');
  const path = require('path');
  const eventsFile = fs.readdirSync(path.join(process.cwd(), '_data/eventi'));
  const events: EventCardProps[] = eventsFile.map((event: EventCardProps) => {
    const { title, date, description } = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), '_data/eventi', event), 'utf8'),
    );
    return {
      title,
      date,
      description,
    };
  });

  const data = await import('_data/home.json');
  const settings = await import('_data/settings.json');

  return {
    props: {
      data: JSON.stringify(data),
      settings: JSON.stringify(settings),
      events,
    },
  };
}

export default Home;
