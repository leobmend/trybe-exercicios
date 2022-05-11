import question from './question.js';
import fs from 'fs/promises';

function main () {

  question('Qual arquivo deseja ler? ').then((answer) => {

    fs.readFile(answer, 'utf-8')
      .then((result) => console.log(result))
      .catch(() => console.log(`Arquivo ${answer} inexistente no diretório.`));

  }).catch((err) => console.log(err));
  
}

main();
