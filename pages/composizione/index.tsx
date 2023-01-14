/* eslint-disable @next/next/no-img-element */
import { Heading } from 'components/heading';
import CustomLink from 'components/link/link';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Layout from 'pages/layout';
import ReactMarkdown from 'react-markdown';
import { GlobalProps, ComposizioneProps, Voci } from 'types';
import style from './style.module.css';
import Link from 'next/link';

interface ComposizionePageProps {
  data: ComposizioneProps;
  settings: GlobalProps;
}

const Composizione = (props: ComposizionePageProps) => {
  const { settings, data } = props;
  const { cinquepermille } = data;

  const fileTypes: Record<string, string> = {
    pdf: 'pdf.svg',
    doc: 'doc.svg',
  };

  return (
    <>
      <Head>
        <title>{settings.title} - Composizione corale</title>
      </Head>

      <Layout {...settings}>
        <section className="flex flex-col m-4 md:m-12">
          <Heading>Composizione corale</Heading>

          <div className={style.wrapper}>
            {Voci.map((voce) => {
              return (
                <div key={voce} className={style.voce}>
                  <h3>{voce}</h3>
                  {data.coristi
                    .filter((corista) => corista.voce === voce)
                    .map((corista) => {
                      return (
                        <div key={corista.nome} className={style.corista}>
                          <p>{corista.nome}</p>
                          <p>
                            <strong>{corista.cognome}</strong>
                          </p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>

          <div className={style.wrapper}>
            <ReactMarkdown className="MD text-xl whitespace-pre-wrap emphasys">
              {data.descrizione as string}
            </ReactMarkdown>
          </div>

          <div>
            <Heading>Cinque per mille</Heading>
            <ul className="flex flex-col gap-4">
              {cinquepermille.map((cinque) => {
                const fileType = cinque.fileUrl?.split('.').pop() || 'doc.svg';
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

// getStaticProps
export const getStaticProps = async () => {
  const data = getFile('composizione.json');
  const settings = getFile('settings.json');

  return {
    props: {
      data,
      settings,
    },
  };
};

export default Composizione;
