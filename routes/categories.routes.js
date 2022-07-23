const express = require('express');
const router = express.Router();

/* GET Categories page. */
router.get('/', function(req, res, next) {
  res.render('add_categories', { title: 'Add Categories' });
});

module.exports = router;
