import { useEffect, useState } from "react";
import type { ApiResponse, Job } from "../../types/job";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.css";
import Header from "../../components/Header/Header";

function Home() {
  const [vagas, setVagas] = useState<Job[]>([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [nivelSelecionado, setNivelSelecionado] = useState("Todos os níveis");

  const vagasFiltradas = vagas.filter(
    (vaga) =>
      vaga.name.toLowerCase().includes(busca.toLowerCase()) &&
      (nivelSelecionado === "Todos os níveis" ||
        vaga.levels[0].name === nivelSelecionado),
  );

  async function buscarVagas() {
    try {
      const resposta = await fetch("/api/jobs");

      if (!resposta.ok) {
        throw new Error("Erro ao carregar vagas");
      }

      const dados = (await resposta.json()) as ApiResponse;

      setVagas(dados.results);
      setCarregando(false);
    } catch {
      setErro(true);
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarVagas();
  }, []);
  console.log(busca);
  return (
    <section>
      <Header />
      <section className="hero">
        <h1>Encontre seu próximo passo</h1>

        <p>Encontre vagas e oportunidades para sua próxima oportunidade.</p>

        <div className="search">
          <input
            type="text"
            placeholder="Busque por cargo ou palavra-chave"
            onChange={(event) => setBusca(event.target.value)}
          />
        </div>

        <div className="filter">
          <select onChange={(event) => setNivelSelecionado(event.target.value)}>
            <option>Todos os níveis</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>
        </div>

        <p className="jobs-count">{vagasFiltradas.length} vagas encontradas</p>
      </section>

      {carregando && <p className="status-message">Carregando vagas...</p>}

      {erro && (
        <p className="status-message">Não foi possível carregar as vagas.</p>
      )}

      {!carregando && !erro && vagasFiltradas.length === 0 && (
        <p className="status-message">Nenhuma vaga encontrada.</p>
      )}

      <div className="jobs-list" id="vagas">
        {vagasFiltradas.map((vaga) => (
          <JobCard key={vaga.id} job={vaga} />
        ))}
      </div>
    </section>
  );
}

export default Home;
