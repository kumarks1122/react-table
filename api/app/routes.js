const express = require('express');
var multer = require('multer');
var upload = multer({ dest: './uploads' });
const router = express.Router();
const filereaderController = require('./v1/controllers/filereaderController');
// version v1 routes api

router.post('/v1/upload', upload.single('file'), filereaderController.upload);

router.post('/v1/search', upload.none(), filereaderController.search);

module.exports = router;