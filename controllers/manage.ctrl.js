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

exports.editCategories = (req, res, next) => {
  res.render('edit_category', {title: `Edit Category ID - ${req.params.id}`});
}

exports.getArticleCategories = (req, res, next) => {
  res.render('manage_categories', {title: 'Manage Categories'});
};