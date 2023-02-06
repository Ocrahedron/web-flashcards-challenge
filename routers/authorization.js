const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Authorizaton = require('../views/Authorization');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Authorizaton, null, res);
});

module.exports = router;
