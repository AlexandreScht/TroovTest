const express = require('express');
const router = express.Router();

const controller = require('../../controller/object/object.controller');
const middleware = require('../../middlewares/authJwt');


router.get('/objects', controller.getAll);
router.get('/object/:id', controller.getOne);
router.post('/object' , middleware.Authenticate, controller.create);
router.put('/object', middleware.Authenticate, controller.edit);
router.delete('/object/:id', middleware.Authenticate, controller.delete);

module.exports = router;
