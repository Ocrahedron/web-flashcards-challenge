const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Main, null, res);
});

module.exports = router;
