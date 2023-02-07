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

router.post('/:id/:il', async (req, res) => {
  try {
    // console.log(req.params.il);
    // console.log(req.body);

    const findCard = await Card.findOne({ where: { id: req.params.il }, raw: true });

    // console.log(findCard);
  

    if (findCard.answer === req.body.name) {
      const findAllCards = await Card.findAll({ where: { deck_id: findCard.deck_id }, raw: true });
      // console.log(findAllCards);
      const randomId = Math.floor(Math.random() * findAllCards.length);
      // console.log(randomId);
      const card = findAllCards[randomId];
      // const card = findAllCards[3];
      // console.log(card);
      // renderTemplate(Game, { card }, res);

      res.json(card);
      // res.sendStatus(200);
      // await Entry.create({ title, body });
    } else {

    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
