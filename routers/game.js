const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Game = require('../views/Game');
const { Card } = require('../db/models');
const { Round } = require('../db/models');
const { User } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findAllCards = await Card.findAll({ where: { deck_id: id }, raw: true });
    const randomId = Math.floor(Math.random() * findAllCards.length);
    const card = findAllCards[randomId];

    const findAll = await User.findAll({ raw: true });
    const findlast = findAll.at(-1);
    console.log(findlast);

    // await Round.create({ date: 123, user_id: 1, deck_id: id });

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
