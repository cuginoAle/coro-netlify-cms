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
import Image from 'next/image';
import Link from 'next/link';

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

          <div className="flex gap-4 snap-x snap-mandatory w-full overflow-auto">
            {ricordo.foto.map((foto) => {
              return (
                <Link className={style.link} href={foto.image} key={foto.image}>
                  <Image
                    sizes="(max-width: 1025px) 90vw, 1025px"
                    className={`snap-center ${style.picture}`}
                    src={foto.image}
                    alt={ricordo.title}
                    width={600}
                    height={400}
                    // loading="lazy"
                  />
                </Link>
              );
            })}
          </div>

          <ReactMarkdown className="MD whitespace-pre-wrap m-8 sm:m-12 text-lg">
            {ricordo.description as string}
          </ReactMarkdown>
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const ricordi = await getCollection('ricordi');
  const paths = ricordi.map((ricordo: RicordiProps) => {
    return {
      params: { slug: ricordo.slug },
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

  return {
    props: {
      settings,
      ricordo,
    },
  };
};

export default Ricordi;
