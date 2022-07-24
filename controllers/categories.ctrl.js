exports.addCategories = (req, res, next) => {
  res.render('add_categories', {title: 'Add Categories'});
};

exports.getCategories = (req, res, next) => {
  res.render('categories', {title: 'Categories'});
};