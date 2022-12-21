const MiscController = require('../controllers/miscellaneous');

const router = require('express').Router()

router.get('/modelType', MiscController.modelType);

module.exports = router;