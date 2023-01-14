import { ContattoProps } from 'types';

interface ContattiPageProps {
  membri: ContattoProps[];
}

const Contatti = (props: ContattiPageProps) => {
  const { membri } = props;

  return (
    <div className="overflow-auto w-full">
      <table className="table-auto">
        <tbody>
          {membri.map((membro) => (
            <tr
              key={`${membro.nome}${membro.cognome}${membro.ruolo}`}
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
