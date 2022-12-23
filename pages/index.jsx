import { Component } from 'react';
import Image from 'next/image';
// import { attributes, react as HomeContent } from '_data/home.md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default class Home extends Component {
  render() {
    const { intro, picture } = JSON.parse(this.props.data);

    return (
      <article>
        <h1>Bau</h1>
        {/* <HomeContent /> */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>

        <Image src={picture} alt="Bau" width={200} height={200} />
      </article>
    );
  }
}

export async function getStaticProps() {
  const data = await import('_data/home.json');

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}
