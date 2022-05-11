import { readFilePromise, writeFile, stringifyAndFormat } from './utils.js';

const main = async (oldName, newName) => {

  try {
    const simpsonsRaw = await readFilePromise('simpsonsFamily.json');
    const simpsonsFamily = JSON.parse(simpsonsRaw);
    
    const characterToRename = simpsonsFamily.find((simpson) => simpson.name === oldName);

    const newSimpsonsFamily = simpsonsFamily.map((simpson) => (
      simpson.id === characterToRename.id 
        ? { id: characterToRename.id, name: newName }
        : simpson
    ));

    const simpsonsFamilyString = stringifyAndFormat(newSimpsonsFamily);
   
    writeFile('simpsonsFamily.json', simpsonsFamilyString, { flag: 'w' });

  } catch (err) {
    console.log(`Erro durante a renomeação do simpson: ${err.message}`);
  }

}

main('Nelson Muntz', 'Maggia Simpson');
