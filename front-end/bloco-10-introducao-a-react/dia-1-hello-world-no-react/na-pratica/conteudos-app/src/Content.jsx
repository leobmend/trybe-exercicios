import React from "react";

const contents = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className="main">
        {contents.map((content) => (
          <div key={content.conteudo}>
            <h3>{content.conteudo}</h3>
            <p>Status: {content.status}</p>
            <p>Bloc: {content.bloco}</p>
          </div>
        ))}
      </main>
    )
  }
}

export default Content;