const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Game = require('../views/Game');
const { Card } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const findAllCards = await Card.findAll({ where: { deck_id: id } });
  // console.log(findAllCards.get({ plain: true }));
  console.log(findAllCards)
  renderTemplate(Game, null, res);
});

module.exports = router;
