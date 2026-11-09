
export default {
  async fetch() {
    try {
      const resposta = await fetch(
        "https://www.themuse.com/api/public/jobs?page=1"
      );

      if (!resposta.ok) {
        return Response.json(
          { error: "Não foi possível buscar as vagas." },
          { status: resposta.status }
        );
      }

      const dados = await resposta.json();

      return Response.json(dados);

    } catch {
      return Response.json(
        { error: "Erro ao consultar a API do The Muse." },
        { status: 500 }
      );
    }
  },
};
