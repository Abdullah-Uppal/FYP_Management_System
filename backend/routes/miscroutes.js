const MiscController = require('../controllers/miscellaneous');

const router = require('express').Router()

router.post('/modelType', MiscController.modelType);

module.exports = router;