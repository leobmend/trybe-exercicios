import fs from 'fs/promises';

const main = () => {

  const stringList = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  Promise.all(
    stringList.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string, { flag: 'w'}))
  )
    .then(() => {
      console.log(`Escrita concluída!`);
    })
    .catch((err) => {
      console.error(`Erro ao escrever nos arquivos: ${err.message}`);
    });

}

main();
