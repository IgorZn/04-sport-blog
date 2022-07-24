exports.getArticles = (req, res, next) => {
  res.render('add_article', {title: 'Create Articles'});
};

exports.getSingleArticle = (req, res, next) => {
  res.render('article', {title: `Single Article: ${req.params.id}`});
};

exports.getSingleArticleCategory = (req, res, next) => {
  res.render('articles', {title: `Single Category: ${req.params.category_id}`});
};