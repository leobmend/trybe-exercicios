const express = require('express');
const app = express();

app.use(express.json());

app.use('/v1', require('./src/routers/events'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
