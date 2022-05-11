import { readFilePromise, writeFile, stringifyAndFormat } from './utils.js';

const main = async () => {

  try {
    const simpsonsRaw = await readFilePromise('simpsons.json');
    const simpsons = JSON.parse(simpsonsRaw);
    
    const simpsonsFamily = simpsons.filter((simpson) => (
      ['1','2','3','4'].includes(simpson.id)
    ));
    const simpsonsFamilyString = stringifyAndFormat(simpsonsFamily);
    writeFile('simpsonsFamily.json', simpsonsFamilyString, { flag: 'w' });

  } catch (err) {
    console.log(err.message);
  }

}

main();
