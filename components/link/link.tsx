import Link, { LinkProps } from 'next/link';
import style from './style.module.css';

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}
const CustomLink = ({
  children,
  className = '',
  ...props
}: CustomLinkProps) => {
  return (
    <Link className={`${className} ${style.link}`} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
