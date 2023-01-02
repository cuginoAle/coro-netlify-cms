import Image from 'next/image';
import Link from 'next/link';
import style from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
const Layout = (props: LayoutProps) => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.mainContent}>
        <header className={style.header}>
          <Link
            href="/"
            className="flex gap-3 items-start sm:items-center"
            passHref
          >
            <Image
              src="/images/logoPiccolo.png"
              alt="logo"
              className={style.logo}
              width={40}
              height={80}
            />
            <div className={style.titleWrapper}>
              <h1 className="text-xl m-0">{props.title}</h1>
              <h2 className="text-base font-normal m-0">{props.subtitle}</h2>
            </div>
          </Link>
        </header>
        <section className={style.contentWrapper}>{props.children}</section>
      </div>
    </div>
  );
};

export default Layout;
