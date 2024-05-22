const express = require('express');
const bodyParser = require('body-parser');
const siteController = require("../controllers/memore.js");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', siteController.getIndex);
router.get('/about-us', siteController.getAboutUs);
router.get('/Q&A', siteController.getQA);
router.get('/contact', siteController.getContact);
router.get('*', siteController.getError);

module.exports = router;