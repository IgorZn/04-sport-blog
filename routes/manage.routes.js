const express = require('express');
const {
    getManageArticles,
    addArticle,
    getArticleCategories,
    editArticle,
    getManageCategory,
    getByIDCategories,
    editByIDCategories,
    deleteByIDCategories


} = require("../controllers/manage.ctrl");
const router = express.Router();

/* GET Manage page. */
router.route('/articles')
    .get(getManageArticles)

router.route('/categories')
    .get(getArticleCategories)

router.route('/categories/add')
    .get(getManageCategory)


router.route('/articles/add')
    .get(addArticle)

router.route('/articles/edit/:id')
    .get(editArticle)

router.route('/categories/edit/:id')
    .get(getByIDCategories)
    .post(editByIDCategories)

router.route('/categories/delete/:id')
    .delete(deleteByIDCategories)

module.exports = router;