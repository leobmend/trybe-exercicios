const main = async () => {

  const sumAndMultiplie = (a, b, c) => {
    const promise = new Promise((resolve, reject) => {
      [a, b, c].forEach((arg) => {
        if (typeof arg != 'number') {
          reject(new Error(`O argumento {${arg}} não é numérico. Informe apenas números.`));
        }
      });

      const result = (a + b) * c;
      if (result < 1000) reject(new Error('Valor muito baixo!'));
      
      resolve(result);
    })
    return promise;
  }
  
  const random1to100 = () => Math.floor(Math.random() * 100 + 1);
  const argsList1 = [random1to100(), random1to100(), random1to100()];
  const argsList2 = [random1to100(), random1to100(), random1to100()];

  // COM THEN/CATCH:
  sumAndMultiplie(...argsList1)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));

  // COM TRY/CATCH:
  try {
    const result = await sumAndMultiplie(...argsList2);
    console.log(result);
  } catch (err) {
    console.log(err.message)
  }
  
}

main();