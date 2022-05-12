import fs from 'fs';

const writeFile = (fileName, text) => {
  fs.writeFileSync(fileName, text);
  return 'Ok!';
}

export { writeFile };