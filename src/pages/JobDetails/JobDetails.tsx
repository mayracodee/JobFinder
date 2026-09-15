import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { ApiResponse, Job } from "../../types/job";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const [vaga, setVaga] = useState<Job | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarVaga() {
      const resposta = await fetch(
        "https://www.themuse.com/api/public/jobs?page=1",
      );

      const dados = (await resposta.json()) as ApiResponse;

      const vagaEncontrada = dados.results.find(
        (vaga) => vaga.id === Number(id),
      );

      setVaga(vagaEncontrada ?? null);
      setCarregando(false);
    }

    buscarVaga();
  }, [id]);

  return (
    <section>
      {carregando && <p>Carregando vaga...</p>}

      {!carregando && !vaga && <p>Vaga não encontrada.</p>}

      {vaga && (
        <div className="job-details">
          <Link to="/" className="back-link">
            ← Voltar para vagas
          </Link>

          <div className="job-header">
            <h1>{vaga.name}</h1>

            <p>{vaga.company.name}</p>

            <p>{vaga.locations[0].name}</p>

            <p>{vaga.levels[0].name}</p>
          </div>

          <div
            className="job-description"
            dangerouslySetInnerHTML={{ __html: vaga.contents }}
          />

          <div className="job-actions">
            <a
              href={vaga.refs.landing_page}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver vaga original
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default JobDetails;
