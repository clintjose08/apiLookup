const createSurveyConfig=require('../controller/countcalc');
const express = require('express');
const router = express();

router.get('/api',createSurveyConfig);;
module.exports=router;
