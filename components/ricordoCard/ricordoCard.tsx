import { RicordiProps } from 'types';
import Image from 'next/image';
import style from './style.module.css';

interface RicordoCardProps extends RicordiProps {}

const RicordoCard = (ricordo: RicordoCardProps) => {
  const cn = `${ricordo.className || ''} ${style.wrapper}`;
  return (
    <div className={cn}>
      <div className={style.fotoHolder}>
        {ricordo.foto.map((foto) => {
          return (
            <Image
              key={foto.image}
              src={foto.image}
              alt={ricordo.title}
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
    </div>
  );
};

export default RicordoCard;
