import fs from 'fs/promises';

const main = () => {

  Promise.all(
    [1, 2, 3, 4, 5].map((id) => fs.readFile(`file${id}.txt`, 'utf-8'))
  )
    .then((strings) => {
      const text = strings.reduce((accText, word) => accText + ' ' + word);
      fs.writeFile('fileAll.txt', text, { flag: 'w' });
    })
    .catch((err) => {
      console.error(`Erro ao ler os arquivos: ${err.message}`);
    });

}

main();
