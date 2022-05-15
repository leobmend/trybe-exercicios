import express from 'express';

import { getSimpsons, setSimpsons } from '../utils/fs-simpsons.js';

const routes = express.Router();

routes.get('/simpsons', async function(req, res) {
  try {
    const simpsons = await getSimpsons();
    res.status(200).json(simpsons);
  } catch (err) {
    console.log(err.message);
    res.status(500).end();
  }
});

routes.get('/simpsons/:id', async function(req, res) {
  try {
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const simpsonIndex = simpsons.findIndex(({ id: currId }) => currId === id );

    if (simpsonIndex === -1) return res.status(404).json({ message: `Simpson not found` });
    
    res.status(200).json(simpsons[simpsonIndex]);
  } catch (err) {
    console.log(err.message);
    res.status(500).end();
  }
});

routes.post('/simpsons', async function(req, res) {
  try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();

    if (simpsons.some(({ id: currId }) => currId === String(id))) {
      return res.status(404).json({ message: `Simpson already exists` });
    }

    simpsons.push({ id: String(id), name });

    await setSimpsons(simpsons);
    
    res.status(204).end();
  } catch (err) {
    console.log(err.message);
    res.status(500).end();
  }
})

/* routes.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
}); */

export default routes;