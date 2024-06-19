const express = require('express');
const bodyParser = require('body-parser');
const siteController = require("../controllers/memores.js");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', siteController.getIndex);
router.get('/add-memore', siteController.getAddMemore);
router.post('/memore', siteController.SaveMemore);
router.get('/about-us', siteController.getAboutUs);
router.get('/Q&A', siteController.getQA);
router.get('/contact', siteController.getContact);
router.get('/memore-added', siteController.getMemoreAdded);
router.get('/memore-error', siteController.getMemoreError);
router.get('*', siteController.getError);

module.exports = router;