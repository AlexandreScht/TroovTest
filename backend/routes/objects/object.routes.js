const express = require('express');
const router = express.Router();

const controller = require('../../controller/object/object.controller');
const middleware = require('../../middlewares/authJwt');


// router.get('/objects', controller.getAll);
router.post('/object',middleware.Authenticate, controller.create);
// router.patch('/object', controller.edit);
// router.delete('/object', controller.delete);

module.exports = router;
