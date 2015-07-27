"use strict";

//获取服务器时间

var express = require('express');
var router = express.Router();

/* "/"表示当前路由URL根地址 */
router.get('/', function (req, res, next) {
    var obj = {};

    var date = new Date();

    obj.data = date.toLocaleString();

    //util.log('params: ' + JSON.stringify(req.params));
    //util.log('body: ' + JSON.stringify(req.body));
    //util.log('query: ' + JSON.stringify(req.query));

    res.header('Content-type', 'application/json');
    res.header('Charset', 'utf8');

    res.jsonp(obj);

});

module.exports = router;
