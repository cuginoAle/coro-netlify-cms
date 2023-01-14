import { ContattoProps } from 'types';

interface ContattiPageProps {
  contatti: { membri: ContattoProps[] };
}

const Contatti = ({ contatti }: ContattiPageProps) => {
  const { membri } = contatti;

  return (
    <div className="overflow-auto w-full">
      <table className="table-auto">
        <tbody>
          {membri.map((membro) => (
            <tr
              key={membro.nome}
              className="whitespace-nowrap last:border-none  border-b border-white/30"
            >
              <td className="px-4 py-2">{membro.nome}</td>
              <td className="px-4 py-2 font-semibold ">{membro.cognome}</td>
              <td className="px-4 py-2">{membro.ruolo}</td>
              <td className="px-4 py-2">{membro.tel}</td>
              <td className="px-4 py-2">{membro.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Contatti };
export type { ContattiPageProps };
