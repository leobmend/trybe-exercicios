const apiRouter = require('express').Router();

const UserController = require('../controllers/UserController');
const validateLogin = require('../middlewares/validateLogin');

const errorMiddleware = require('../middlewares/error');
const auth = require('../middlewares/auth');
const adminCheck = require('../middlewares/adminCheck');

apiRouter.post('/login', validateLogin, UserController.login);
apiRouter.get('/users/me', auth, UserController.getByUsername);
apiRouter.get('/secret-info', auth, adminCheck, UserController.secretPage);

apiRouter.use(errorMiddleware);

module.exports = apiRouter;
