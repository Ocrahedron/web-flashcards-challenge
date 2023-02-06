const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Game = require('../views/Game');
const { Card } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findAllCards = await Card.findAll({ where: { deck_id: id }, raw: true });
    const randomId = Math.floor(Math.random() * findAllCards.length);
    const card = findAllCards[randomId];
    renderTemplate(Game, { card }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/game/:id', (req, res) => {
  try {
    console.log(req.query);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
