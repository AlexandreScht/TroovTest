const express = require('express');
const router = express.Router();

const controller = require('../../controller/session/session.controller');


// router.get('/session/user', controller.currentUser);
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
