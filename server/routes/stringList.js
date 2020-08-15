const express = require('express');
const controller = require('../controllers/stringlist')
const router = express.Router();

router.get("/all", controller.GET_STRING_LIST)

module.exports = router;