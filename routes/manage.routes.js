const express = require('express');
const router = express.Router();

/* GET Manage page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Manage' });
});

module.exports = router;