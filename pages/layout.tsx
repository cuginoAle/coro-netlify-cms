import Image from 'next/image';
import style from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
const Layout = (props: LayoutProps) => {
  return (
    <div className={style.mainContent}>
      <header className={style.header}>
        <Image
          src="/images/logoPiccolo.png"
          alt="logo"
          className={style.logo}
          width={40}
          height={80}
        />
        <div className={style.titleWrapper}>
          <h1 className="text-2xl font-semibold">{props.title}</h1>
          <h2 className="">{props.subtitle}</h2>
        </div>
      </header>
      <section className={style.contentWrapper}>{props.children}</section>
    </div>
  );
};

export default Layout;
