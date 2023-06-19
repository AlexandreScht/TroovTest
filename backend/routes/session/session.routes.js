const express = require('express');
const router = express.Router();

const controller = require('../../controller/session/session.controller');
const middleware = require('../../middlewares/authJwt');


router.get('/session/user', middleware.Authenticate, controller.currentUser);
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
