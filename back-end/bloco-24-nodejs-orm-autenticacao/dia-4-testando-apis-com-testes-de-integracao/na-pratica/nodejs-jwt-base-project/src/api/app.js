const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', validateJWT, routes.getUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.get('/api/users/:id', validateJWT, routes.getUserById);

app.use(apiRoutes);

/*
    Detalhe para a exportação do `app`, já que
    precisaremos dele nos testes com `chaiHttp` e
    para rodar nosso `server.js`
*/
module.exports = app;