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

    // создание игры в БД
    const findAll = await User.findAll({ raw: true });
    const findlast = findAll.at(-1).id;
    await Round.create({
      date: new Date(), user_id: findlast, deck_id: id, firstAnswer: 0, allAnswers: 0,
    });

    renderTemplate(Game, { card }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/:id/:il', async (req, res) => {
  try {
    const findCard = await Card.findOne({ where: { id: req.params.il }, raw: true });
    const findAll = await User.findAll({ raw: true });
    const findlast = findAll.at(-1).id;

    if (findCard.answer === req.body.name) {
      if (findCard.check === null) {
        const thisRound = await Round.findOne({ where: { user_id: findlast } });
        console.log(thisRound);
        await thisRound.increment('firstAnswer', { by: 1 });
      }

      await Card.update(
        { check: true },
        {
          where: {
            id: req.params.il,
            check: null,
          },
        },
      );

      const findAllCards = await Card.findAll({ where: { deck_id: findCard.deck_id }, raw: true });
      const createCard = () => {
        const randomId = Math.floor(Math.random() * findAllCards.length);
        const card = findAllCards[randomId];

        if (card.check === null) {
          res.json(card);
        } else {
          if (findAllCards.every((el) => el.check === true)) {
            console.log('oleg - game over');

            res.json({ redirect: '/account' });
            return;
          }
          createCard();
        }
      };
      createCard();

      const thisRound = await Round.findOne({ where: { user_id: findlast } });
      await thisRound.increment('allAnswers', { by: 1 });
    } else {
      // let mistake =
      // res.json(card)
      console.log('Ошибка');
      const thisRound = await Round.findOne({ where: { user_id: findlast } });
      await thisRound.increment('allAnswers', { by: 1 });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
