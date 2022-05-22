const express = require('express');
const { errorTreatment } = require('./src/controllers/middlewares');
const routes = require('./src/controllers/routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorTreatment);

app.listen(3001, () => {
  console.log('Cep API running on port 3001.');
});
