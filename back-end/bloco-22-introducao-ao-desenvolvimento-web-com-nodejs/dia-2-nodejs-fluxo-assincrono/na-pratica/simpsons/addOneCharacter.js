import { readFilePromise, writeFile, stringifyAndFormat } from './utils.js';

const main = async (newCharacter) => {

  try {
    const simpsonsRaw = await readFilePromise('simpsonsFamily.json');
    const simpsonsFamily = JSON.parse(simpsonsRaw);
    
    const maxId = simpsonsFamily.reduce((acc, curr) => (
      parseInt(curr.id) > parseInt(acc) ? curr.id : acc
    ), simpsonsFamily[0].id);

    simpsonsFamily.push({ id: (parseInt(maxId) + 1).toString(), name: newCharacter });

    const simpsonsFamilyString = stringifyAndFormat(simpsonsFamily);
   
    writeFile('simpsonsFamily.json', simpsonsFamilyString, { flag: 'w' });

  } catch (err) {
    console.log(err.message);
  }

}

main('Nelson Muntz');
