/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
// import { attributes, react as HomeContent } from '_data/home.md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from './index.module.css';
import Head from 'next/head';
import Layout from './layout';
import { EventCard, EventCardProps } from 'components/eventCard/eventCard';

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

        {/* <section className="bg-slate-800/70 p-5"> */}
        <section className={style.promo}>
          <ReactMarkdown
            className={style.promoContent}
            remarkPlugins={[remarkGfm]}
          >
            {promo}
          </ReactMarkdown>
        </section>

        <section className="bg-slate-800/70 p-5 mb-5 text-xl">
          <ReactMarkdown className="MD" remarkPlugins={[remarkGfm]}>
            {history}
          </ReactMarkdown>
        </section>

        <section className="flex gap-4 flex-wrap">
          {props.events.map((event) => {
            return <EventCard key={event.title} event={event} />;
          })}
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const data = await import('_data/home.json');
  const settings = await import('_data/settings.json');
  // const events = await import('_data/events.json');
  const events = [
    {
      title: 'Concerto di Natale',
      date: '2022-12-24',
      description: 'Descrizione',
    },
  ];

  return {
    props: {
      data: JSON.stringify(data),
      settings: JSON.stringify(settings),
      events,
    },
  };
}

export default Home;
