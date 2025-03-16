import { curso } from './page';

return (

  <main>
    <h1>{curso.descricao}</h1>
    <p>{curso.descricao}</p>
    <p>Total Horas:`curso.total_horas</p>
    <p>Total Aulas:{curso.total_aulas </p>
    <h2>Aulas</h2>
    <ul>
      `curso.aula.map((aula)={'>'}(
        <li> key={aula.id}&gt;
          <Link <Link href={`/cursos/${curso.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))&rbrace;
      </ul>
    </main>
  );
}
      
           </li>
      )
      // app/cursos/[curso]/[aula]/page.tsx
import { getAula } from '@/api/cursos';
import Link from 'next/link';

export default async function AulaPage({
  params,
}: {
  params: { curso: string; aula: string };
}) {
  const aula = await getAula(params.curso, params.aula);
  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  );
}
      )
    </ul>
