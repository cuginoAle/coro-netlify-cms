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
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>
      <section className={style.contentWrapper}>{props.children}</section>
    </div>
  );
};

export default Layout;
