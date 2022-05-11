import fs from 'fs';
import fsp from 'fs/promises';

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, content) => {
      if (err) return reject(new Error(`Erro ao ler o arquivo ${err.message}`));
      resolve(content);
    });
  });
}

function writeFile(fileName, data, options) {
  fsp.writeFile(fileName, data, options)
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));
}

function stringifyAndFormat(object) {
  return JSON.stringify(object)
    .replace(/{/g, '\n  {')
    .replace(/]/g, '\n]');
}

export { readFilePromise, writeFile, stringifyAndFormat };
