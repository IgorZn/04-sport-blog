const express = require('express');
const {getCategories} = require("../controllers/categories.ctrl");
const router = express.Router();

/* GET Categories page. */
router.route('/')
    .get(getCategories)

module.exports = router;
