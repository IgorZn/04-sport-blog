const express = require('express');
const { getArticles, getSingleArticle, getSingleArticleCategory } = require("../controllers/articles.ctrl");
const router = express.Router();

/* GET Article page. */
router.route('/')
    .get(getArticles)


/* GET Article page by ID. */
router
    .route('/show/:id')
    .get(getSingleArticle)


/* GET Article page Category by ID. */
router
    .route('/category/:category_id')
    .get(getSingleArticleCategory)


module.exports = router;
