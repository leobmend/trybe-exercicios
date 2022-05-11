import { readFilePromise } from './utils.js';
import readline from 'readline-sync';

const main = async () => {
  
  const idToPrint = readline.questionInt('Qual o id do simpson que deseja? '); 

  try {
    const simpsonsRaw = await readFilePromise('simpsons.json');
    const simpsons = JSON.parse(simpsonsRaw);

    if (idToPrint > simpsons.length || idToPrint < 0) {
      throw new Error('Não existe um simpson com este id.')
    }
    
    const simpsonToPrint = simpsons.filter((simpson) => simpson.id === idToPrint.toString())[0];

    console.log(`${simpsonToPrint.id} - ${simpsonToPrint.name}`);
    
  } catch (err) {
    console.log(err.message);
  }
}

main();
