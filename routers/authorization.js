const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Authorization = require('../views/Authorization');
const { User } = require('../db/models');

const router = express.Router();

// router.get('/authorization', (req, res) => {
//   renderTemplate(Authorization, null, res);
// });

router.post('/authorization', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(400).json({ error: 'Неверное имя или пароль' });
    }

    if (user.password !== password) {
      return res.status(400).send({ error: 'Неверное имя или пароль' });
    }

    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Внутренняя ошибка сервера' });
  }
});
module.exports = router;
