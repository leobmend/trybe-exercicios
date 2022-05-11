import readline from 'readline';

function question(message) {
  // Criamos uma variável readlineInterface para inicializar
  // a interface de comunicação do módulo readline, conforme visto na documentação
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    // No entanto, abriremos a `question` dentro de uma promise
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

export default question;