const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Entering = require('../views/Entering');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Entering, null, res);
});

module.exports = router;
