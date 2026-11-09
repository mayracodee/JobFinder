# JobFinder

Aplicação web para busca e consulta de oportunidades de emprego, desenvolvida com React e TypeScript e integrada à API REST da Jobicy.

## ✦ Sobre o projeto

O JobFinder é um projeto de portfólio desenvolvido com o objetivo de praticar conceitos de desenvolvimento Front-End moderno, com foco no consumo de APIs REST, tipagem com TypeScript, gerenciamento de estados assíncronos, componentização e roteamento.

A aplicação permite visualizar oportunidades de emprego, pesquisar vagas por cargo ou palavra-chave, filtrar por nível de experiência e consultar os detalhes de cada oportunidade.

**Sobre as vagas:** os dados são fornecidos pela API da Jobicy, uma plataforma internacional de oportunidades de emprego. Por isso, as vagas podem estar em inglês e apresentar oportunidades de diferentes localidades. O objetivo principal deste projeto é demonstrar a integração com uma API externa e o tratamento dos dados recebidos. As candidaturas são realizadas diretamente na plataforma de origem.

## 🚀 Funcionalidades

- Listagem de vagas obtidas por API REST
- Busca por cargo ou palavra-chave
- Filtro por nível de experiência
- Contagem de resultados
- Estado de carregamento
- Tratamento de erros na requisição
- Estado de resultados vazios
- Página de detalhes da vaga
- Exibição de salário quando disponibilizado pela API
- Navegação entre páginas com React Router
- Link para a publicação original da vaga
- Interface responsiva

## 🛠️ Tecnologias

- React
- TypeScript
- Vite
- React Router
- CSS
- REST API
- ESLint

## 🔌 API

Os dados das oportunidades são obtidos através da API pública da **Jobicy**.

A aplicação realiza requisições HTTP utilizando `fetch`, processa as respostas em formato JSON e utiliza TypeScript para definir a estrutura dos dados recebidos.

Créditos: [Jobicy](https://jobicy.com/).

## 📚 Conceitos praticados

Durante o desenvolvimento foram trabalhados:

- Consumo de APIs REST
- `fetch`
- Promises
- `async/await`
- `useEffect`
- `useState`
- Tipagem de dados com TypeScript
- Interfaces
- Arrays e objetos
- `map()` e `filter()`
- Props
- Componentização
- React Router
- Rotas dinâmicas
- Gerenciamento de estados de carregamento, erro e vazio
- Renderização de dados externos
- Responsividade com CSS

## 💻 Como executar o projeto

```bash
npm install
npm run dev
```

## 🌐 Deploy

[https://jobfinder-mc.vercel.app/](https://jobfinder-mc.vercel.app/)

## 👩‍💻 Desenvolvido por

**Mayra Lima**

Desenvolvedora Front-End em formação.