
const express = require('express');
const app = express();

const port = process.env.PORT || 9080;
const createSurveyConfigRoute=require('./route/countroutes');

const http = require('http');

var BodyParser = require('body-parser');
app.use(BodyParser());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
app.use('/',createSurveyConfigRoute);

const server = http.createServer(app);
server.listen(port, () => {

    console.log('Express server started');
});
