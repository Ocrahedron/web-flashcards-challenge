require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { sequelize } = require('./db/models');

const app = express();

const authorization = require('./routers/openAuthorization')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/', authorization)


app.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
