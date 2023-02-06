const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Card = require('../views/Card');

const router = express.Router();


router.get('/', (req, res) => {
  renderTemplate(Card, null, res);
});

module.exports = router;
