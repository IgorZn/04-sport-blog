const express = require('express');
const {
    getManageArticles,
    addArticle,
    getArticleCategories,
    editArticle,
    editCategories



} = require("../controllers/manage.ctrl");
const router = express.Router();

/* GET Manage page. */
router.route('/articles')
    .get(getManageArticles)

router.route('/categories')
    .get(getArticleCategories)

router.route('/articles/add')
    .get(addArticle)

router.route('/articles/edit/:id')
    .get(editArticle)

router.route('/categories/edit/:id')
    .get(editCategories)

module.exports = router;