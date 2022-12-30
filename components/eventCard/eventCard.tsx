import style from './style.module.css';
import Image from 'next/image';
import { DateBanner } from 'components/dateBanner/dateBanner';

interface EventCardProps {
  title: string;
  date: string;
  description?: string;
  place?: string;
  className?: string;
  picture?: string;
}
const EventCard = ({ className, ...props }: EventCardProps) => {
  const date = new Date(props.date);

  return (
    <section className={`${style.wrapper} ${className}`}>
      <DateBanner date={date} />
      <div className={`${style.content} flex flex-col items-center gap-4`}>
        <h3 className="text-2xl font-semibold">{props.title}</h3>
        <p className="text-lg  font-semibold">{props.description}</p>
        {props.picture && (
          <Image
            src={props.picture}
            alt={props.title}
            width="280"
            height="280"
          />
        )}
      </div>
    </section>
  );
};

export { EventCard };
export type { EventCardProps };
