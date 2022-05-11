import question from './question.js';
import fs from 'fs/promises';

function main () {

  question('Qual arquivo deseja alterar? ').then((file) => {

    question('Escreva a palavra que deseja alterar e a sua substituta no seguinte formato:' +
      '\natualPalavra - novaPalavra\n').then((words) => {

      const [oldWord, newWord] = words.split(' - ');

      fs.readFile(file, 'utf-8').then((result) => {
        
        const newText = result.replace(oldWord, newWord);

        question('Qual o nome do novo arquivo? ').then((newFile) => {

          fs.writeFile(newFile, newText)
            .then(() => console.log('Palavra substituída com sucesso!'))
            .catch((err) => console.log(`Erro durante a escrita do arquivo: ${err.message}`));

        }).catch((err) => console.log(err.message))
        
      }).catch(() => console.log(`Arquivo ${file} inexistente no diretório.`));

    }).catch((err) => console.log(err.message))

  }).catch((err) => console.log(err.message));
  
}

main();
