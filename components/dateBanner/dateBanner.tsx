import style from './style.module.css';

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
interface DateProps {
  date: Date;
}

const DateBanner = ({ date }: DateProps) => {
  return (
    <div className={style.banner}>
      <div className={style.date}>
        <p className={style.day}>{date.getDate()}</p>
        <p className={style.month}>{months[date.getMonth()]}</p>
        <p className={style.year}>{date.getFullYear()}</p>
      </div>
    </div>
  );
};

export { DateBanner };
