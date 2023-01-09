import { RicordiProps } from 'types';
import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';

interface RicordoCardProps extends RicordiProps {}

const RicordoCard = (ricordo: RicordoCardProps) => {
  const cn = `${ricordo.className || ''} ${style.wrapper}`;
  return (
    <Link href={`/ricordi/${ricordo.title.toLowerCase()}`} className={cn}>
      <div className={style.fotoHolder}>
        {ricordo.foto.map((foto) => {
          return (
            <Image
              key={foto.image}
              src={foto.image}
              alt={ricordo.title}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              width="200"
              height="200"
              className={style.foto}
            />
          );
        })}
      </div>
      <div className={style.copyHolder}>
        <h3 className={style.titolo}>{ricordo.title}</h3>
      </div>
    </Link>
  );
};

export default RicordoCard;
