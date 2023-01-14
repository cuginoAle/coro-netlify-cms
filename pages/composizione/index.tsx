import { Heading } from 'components/heading';
import CustomLink from 'components/link/link';
import { getFile } from 'helpers/getFile';
import Head from 'next/head';
import Layout from 'pages/layout';
import ReactMarkdown from 'react-markdown';
import { GlobalProps, ComposizioneProps, Voci } from 'types';
import style from './style.module.css';

interface ComposizionePageProps {
  data: ComposizioneProps;
  settings: GlobalProps;
}

const Storia = (props: ComposizionePageProps) => {
  const { settings, data } = props;
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

export default Storia;
