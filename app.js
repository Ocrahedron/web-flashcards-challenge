require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { sequelize } = require('./db/models');

const app = express();

const mainPage = require('./routers/mainpage');

const authorization = require('./routers/authorization');
const entering = require('./routers/entering');
const game = require('./routers/game');
const account = require('./routers/personalAccount');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/', mainPage);

app.use('/authorization', authorization);
app.use('/entering', entering);
app.use('/game', game);
app.use('/account', account);

app.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
