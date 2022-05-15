import fs from 'fs/promises';

const getSimpsons = () => {
  return fs.readFile('data/simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
};

const setSimpsons = (newSimpsons) => {
  return fs.writeFile('data/simpsons.json', JSON.stringify(newSimpsons), { flag: 'w' });
};

export { getSimpsons, setSimpsons };
