const express = require('express');
const router = express.Router();


const userRoutes = require('./session');
const objectsRoutes = require('./objects');

router.use('/', userRoutes);
router.use('/', objectsRoutes);

module.exports = router;
