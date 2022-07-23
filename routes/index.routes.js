const express = require('express');
const { getIndex } = require("../controllers/index.ctrl");
const router = express.Router();


/* GET home page. */
router
    .route('/')
    .get(getIndex);

module.exports = router;
