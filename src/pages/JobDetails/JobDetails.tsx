
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
      try {
        const resposta = await fetch(
          "https://jobicy.com/api/jobs?count=10&industry=engineering"
        );

        if (!resposta.ok) {
          throw new Error("Erro ao carregar vaga");
        }

        const dados = (await resposta.json()) as ApiResponse;

        const vagaEncontrada = dados.jobs.find(
          (vaga) => vaga.id === Number(id)
        );

        setVaga(vagaEncontrada ?? null);
      } catch {
        setVaga(null);
      } finally {
        setCarregando(false);
      }
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
            <h1>{vaga.jobTitle}</h1>

            <p>{vaga.companyName}</p>

            <p>{vaga.jobGeo}</p>

            <p>{vaga.jobLevel}</p>

            {vaga.salaryMin != null && vaga.salaryMax != null && (
              <p>
                {vaga.salaryCurrency} {vaga.salaryMin.toLocaleString()} –{" "}
                {vaga.salaryMax.toLocaleString()} ({vaga.salaryPeriod})
              </p>
            )}
          </div>

          <div
            className="job-description"
            dangerouslySetInnerHTML={{
              __html: vaga.jobDescription,
            }}
          />

          <div className="job-actions">
            <a
              href={vaga.url}
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
