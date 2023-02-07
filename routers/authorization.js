const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Authorization = require('../views/Authorization');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Authorization, null, res);
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    await User.create({ name: username, password });
    res.redirect('/entering');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Внутренняя ошибка сервера' });
  }
});
module.exports = router;
