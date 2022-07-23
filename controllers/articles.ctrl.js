exports.getArticles = (req, res, next) => {
  res.render('add_article', {title: 'Create Articles'});
}