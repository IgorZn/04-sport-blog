const express = require('express');
const {getCategories, addCategory} = require("../controllers/categories.ctrl");
const router = express.Router();

/* GET Categories page. */
router.route('/')
    .get(getCategories)

router.route('/add')
    .post(addCategory)

module.exports = router;
