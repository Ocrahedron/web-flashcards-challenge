const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Account = require('../views/PersonalAccount');
const { Round } = require('../db/models');
const { Card } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allRounds = await Round.findAll({ raw: true });
  const oneGame = allRounds[0];

  const allCards = await Card.findAll({ where: { deck_id: oneGame.deck_id }, raw: true });
  // console.log(allRounds);
  // console.log(allCards);

  renderTemplate(Account, { allRounds, allCards }, res);
});

module.exports = router;
