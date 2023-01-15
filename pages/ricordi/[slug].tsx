/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Layout from 'pages/layout';
import { GlobalProps, RicordiProps } from 'types';
import { getCollection, getCollectionEntries } from 'helpers/collection';

import ReactMarkdown from 'react-markdown';
import style from './style.module.css';
import { Heading } from 'components/heading/heading';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import CustomLink from 'components/link/link';

const Ricordi = (props: {
  settings: GlobalProps;
  ricordo: RicordiProps;
  altriRicordi: string[];
}) => {
  const galleryRef = React.useRef<HTMLDivElement>(null);
  const { settings, ricordo, altriRicordi } = props;

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [ricordo]);

  return (
    <>
      <Head>
        <title>{settings.title} - Ricordi fotografici</title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col m-2 md:m-4">
          <Heading>{ricordo.title}</Heading>

          <div
            className="flex gap-4 snap-x snap-mandatory w-full overflow-auto"
            ref={galleryRef}
          >
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
                  />
                </Link>
              );
            })}
          </div>

          <ReactMarkdown className="MD whitespace-pre-wrap m-8 sm:m-12 text-lg">
            {ricordo.description as string}
          </ReactMarkdown>

          <Heading>Altri ricordi</Heading>
          <div className="flex gap-2 flex-wrap pb-6">
            {altriRicordi.map((ricordo) => {
              return (
                <Link
                  href={`/ricordi/${ricordo}`}
                  key={ricordo}
                  className="bg-white/20 px-4 py-2 shrink-0"
                >
                  <h4>{ricordo}</h4>
                </Link>
              );
            })}
          </div>
          <CustomLink href="/" className="text-xl font-light my-8 self-start">
            &lt; indietro
          </CustomLink>
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

  const altriRicordi = getCollectionEntries('ricordi');

  const ricordo = getFile(`ricordi/${slug}.json`);
  const settings = getFile('settings.json');

  return {
    props: {
      settings,
      ricordo,
      altriRicordi,
    },
  };
};

export default Ricordi;
