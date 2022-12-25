'use client';

import Image from 'next/image';
// import { attributes, react as HomeContent } from '_data/home.md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage(props) {
  const { intro, picture } = JSON.parse(props.data);
  const { title, subtitle } = JSON.parse(props.settings);

  return (
    <article>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {/* <HomeContent /> */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>

      <Image src={picture} alt="Bau" width={200} height={200} />
    </article>
  );
}
