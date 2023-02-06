require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
