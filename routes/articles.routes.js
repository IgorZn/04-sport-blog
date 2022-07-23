const express = require('express');
const {getArticles} = require("../controllers/articles.ctrl");
const router = express.Router();

/* GET Article page. */
router.route('/')
    .get(getArticles);

module.exports = router;
