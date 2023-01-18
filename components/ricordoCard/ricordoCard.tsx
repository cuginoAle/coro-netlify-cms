import { RicordiProps } from 'types';
import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';

interface RicordoCardProps extends RicordiProps {}

const RicordoCard = (ricordo: RicordoCardProps) => {
  const cn = `${ricordo.className || ''} ${style.wrapper}`;
  return (
    <Link href={`/ricordi/${ricordo.slug}`} className={cn}>
      <div className={style.fotoHolder}>
        {ricordo.foto.map((foto) => {
          return (
            <div key={foto.image} className={style.foto}>
              <Image
                src={foto.image}
                alt={ricordo.title}
                sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 50vw,
              200px"
                width="200"
                height="200"
              />
            </div>
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
