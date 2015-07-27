"use strict";

//js拼接

var express = require('express');
var router = express.Router();
var fs = require('fs');

/* "/"表示当前路由URL根地址 */
router.get('/*', function (req, res, next) {

    //console.log('params: ' + JSON.stringify(req.params));
    //console.log('body: ' + JSON.stringify(req.body));
    //console.log('query: ' + JSON.stringify(req.query));

    util.log(req.params);

    var files = req.params[0].toLowerCase();
    var arr = [];
    if (files) {
        arr = files.split(',');
    }

    if (files.indexOf('.css') > -1) {
        res.header('Content-type', 'text/css');
    } else if (files.indexOf('.js') > -1) {
        res.header('Content-type', 'text/javascript');
    }

    res.header('Charset', 'utf8');


    var sb = [];

    if (arr && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            var data = fs.readFileSync("../" + arr[i], "UTF-8");
            if (data) {
                sb.push(data);
            }
        }
    }

    if (sb) {
        res.send(sb.join(''));
    }
    res.send("");

});

module.exports = router;
