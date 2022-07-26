Categories = require('../models/category')


exports.addCategory = async (req, res, next) => {
  const { title,  description } = req.body
  console.log(title, description)
  await Categories.create(req.body, async (err) => {
      if (err) return console.log(err)
      res.redirect('/categories')
  })
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