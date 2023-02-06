const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Game = require('../views/Game');
const { Card } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const findAllCards = await Card.findAll({ where: { deck_id: id }, raw: true });
  

  // let random = Math.floor(Math.random()*)
  
  
  renderTemplate(Game, { findAllCards }, res);
});

module.exports = router;
