const express = require('express');
const router = express.Router();
const controller = require('../controllers/accounts')

router.get('/all', controller.GET_ALL_ACCOUNTS)


module.exports = router;