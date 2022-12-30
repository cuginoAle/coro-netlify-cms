import style from './style.module.css';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  description?: string;
  place?: string;
  className?: string;
  picture?: string;
}
//mesi da 0 a 11
const months = [
  'Gen',
  'Feb',
  'Mar',
  'Apr',
  'Mag',
  'Giu',
  'Lug',
  'Ago',
  'Set',
  'Ott',
  'Nov',
  'Dic',
];

const EventCard = ({ className, ...props }: EventCardProps) => {
  const date = new Date(props.date);

  return (
    <section className={`${style.wrapper} ${className}`}>
      <div className={style.banner}>
        <div className={style.date}>
          <p className={style.day}>{date.getDate()}</p>
          <p className={style.month}>{months[date.getMonth()]}</p>
          <p className={style.year}>{date.getFullYear()}</p>
        </div>
      </div>
      <div className={style.content}>
        <h3 className="text-2xl font-semibold">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
        {props.picture && (
          <div className="flex justify-center">
            <Image
              src={props.picture}
              alt={props.title}
              width="280"
              height="280"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export { EventCard };
export type { EventCardProps };
