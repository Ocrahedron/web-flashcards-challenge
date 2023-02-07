const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Entering = require('../views/Entering');
const { User } = require('../db/models');
const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Entering, null, res);
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.findOne({ where:{ name: username, password }});
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Внутренняя ошибка сервера' });
  }
});
module.exports = router;

