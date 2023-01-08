import RicordoCard from 'components/ricordoCard/ricordoCard';
import { RicordiProps } from 'types';

interface RicordiListProps {
  ricordi: RicordiProps[];
}

const RidordiList = ({ ricordi }: RicordiListProps) => {
  return (
    <div className="flex overflow-auto w-full snap-mandatory snap-x snap-center gap-4">
      {ricordi.map((ricordo) => (
        <RicordoCard
          className="w-72 shrink-0 snap-center"
          key={ricordo.title}
          {...ricordo}
        />
      ))}
    </div>
  );
};

export default RidordiList;
