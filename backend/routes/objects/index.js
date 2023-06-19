const express = require('express');
const router = express.Router();

router.use('/', require('./object.routes'));

module.exports = router;
