const checkBody = require("../support/misc");
Categories = require('../models/category')

exports.getManageArticles = (req, res, next) => {
  res.render('manage_articles', {title: 'Manage Articles'});
}

exports.getManageCategories = (req, res, next) => {
  res.render('manage_categories', {title: 'Manage Categories'});
}

exports.addArticle = (req, res, next) => {
  res.render('add_article', {title: 'Add Article'});
}

exports.editArticle = (req, res, next) => {
  res.render('edit_article', {title: `Edit Article ID - ${req.params.id}`});
}

exports.getByIDCategories = async (req, res, next) => {
    const id = req.params.id;
    const category = await Categories.findById(id)
    res.render('edit_category', {
        title: `Edit Category ID - ${req.params.id}`,
        category: category
    });
}

exports.editByIDCategories = (req, res, next) => {
    const id = req.params.id
    if (checkBody(req.body)) {
        Categories.findByIdAndUpdate(id, req.body);
        res.redirect(204, '/manage/categories');
    }
}

exports.deleteByIDCategories = async (req, res, next) => {
    console.log('deleteByIDCategories', req.params.id)
    const id = req.params.id
    if (id) {
        await Categories.findByIdAndRemove(id);
        await res.status(200);
    }
}

exports.getArticleCategories = (req, res, next) => {
    Categories.getCategories((err, categories) => {
    if(err) res.send(err)
    res.render('manage_categories', {
      title: 'Manage Categories',
      categories: categories

    });
  })
};

exports.getManageCategory = (req, res, next) => {
  res.render('add_categories', {title: 'Create Category'})
};