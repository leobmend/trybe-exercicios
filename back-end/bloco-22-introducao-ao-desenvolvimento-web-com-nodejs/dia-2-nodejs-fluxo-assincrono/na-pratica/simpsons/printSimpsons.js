import { readFilePromise } from './utils.js';

const main = async () => {
  
  try {
    const simpsonsRaw = await readFilePromise('simpsons.json');
    const simpsons = JSON.parse(simpsonsRaw);
    
    simpsons.forEach((simpson) => {
      console.log(`${simpson.id} - ${simpson.name}`);
    })
    
  } catch (err) {
    console.log(err);
  }
}

main();
