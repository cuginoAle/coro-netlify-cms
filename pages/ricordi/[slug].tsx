/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Layout from 'pages/layout';
import { GlobalProps, RicordiProps } from 'types';
import { getCollection } from 'helpers/getCollection';

import ReactMarkdown from 'react-markdown';
import style from './style.module.css';
import { Heading } from 'components/heading';

const Ricordi = (props: { settings: GlobalProps; ricordo: RicordiProps }) => {
  const { settings, ricordo } = props;
  return (
    <>
      <Head>
        <title>{settings.title} - Ricordi fotografici</title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col m-2 md:m-4">
          <Heading>{ricordo.title}</Heading>

          <ReactMarkdown className="MD">
            {ricordo.description as string}
          </ReactMarkdown>
          <div className="flex gap-4 snap-x snap-mandatory w-full overflow-auto">
            {ricordo.foto.map((foto) => {
              return (
                <img
                  className={`snap-center ${style.picture}`}
                  key={foto.image}
                  src={foto.image}
                  alt={ricordo.title}
                  loading="lazy"
                />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const ricordi = await getCollection('ricordi');
  const paths = ricordi.map((ricordo: RicordiProps) => {
    return {
      params: { slug: ricordo.title },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string;
  const ricordo = getFile(`ricordi/${slug}.json`);
  const settings = getFile('settings.json');

  console.log('ricordo', ricordo);

  return {
    props: {
      settings,
      ricordo,
    },
  };
};

export default Ricordi;
