const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Account = require('../views/PersonalAccount');

const router = express.Router();

router.get('/', (req, res) => {




  renderTemplate(Account, null, res);
});

module.exports = router;
