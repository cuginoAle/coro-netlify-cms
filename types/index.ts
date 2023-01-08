interface HomeProps {
  intro: string;
  picture: string;
  history: string;
  promo: string;
}

interface GlobalProps {
  title: string;
  subtitle: string;
}

interface EventProps {
  title: string;
  date: string;
  description?: string;
  place?: string;
  picture?: string;
}

interface InEvidenzaProps {
  headings?: string;
  description?: string;
  short_title: string;
  short_description?: string;
  date?: string;
  picture?: string;
  allegati?: {
    title: string;
    fileUrl: string;
    lang: 'it' | 'en';
  }[];
  links?: {
    title: string;
    linkUrl: string;
    lang: 'it' | 'en';
  }[];
}

interface fotoProps {
  title: string;
  date: string;
  image: string;
}
interface RicordiProps {
  title: string;
  date: string;
  description?: string;
  className?: string;
  foto: fotoProps[];
}

export type {
  HomeProps,
  GlobalProps,
  EventProps,
  InEvidenzaProps,
  RicordiProps,
  fotoProps,
};
