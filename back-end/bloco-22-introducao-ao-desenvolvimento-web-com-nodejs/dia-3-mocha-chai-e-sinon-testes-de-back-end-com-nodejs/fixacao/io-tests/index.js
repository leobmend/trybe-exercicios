import fs from 'fs';

const readFile = (nomeDoArquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
};

export { readFile };