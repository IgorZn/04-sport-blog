Categories = require('../models/category')


exports.addCategories = (req, res, next) => {
  res.render('add_categories', {title: 'Add Categories'});
};

exports.getCategories = (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if(err) res.send(err)
    res.render('categories', {
      title: 'Categories',
      categories: categories

    });
  })
};