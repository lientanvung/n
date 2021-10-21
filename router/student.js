const express = require('express');
const router = express.Router();

const newStudent = require('../controllers/StudentControllers');


router.use(':slug', newStudent.show);
router.use('/', newStudent.index);


module.exports = router;