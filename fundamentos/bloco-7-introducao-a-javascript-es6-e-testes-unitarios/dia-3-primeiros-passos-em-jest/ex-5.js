/* Exercício 5
  - A partir dos testes contidos no arquivo ex-5.text.js, construa a função techList. 
  - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
    {
      tech: 'nomeTecnologia',
      name: name,
    }
*/

function techList(list, name) {
  const techObjList = [];
  if (list.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < list.sort().length; i += 1) {
      techObjList.push({
        tech: list.sort()[i],
        name,
      })
    }
    return techObjList;
  }
};

module.exports = techList;