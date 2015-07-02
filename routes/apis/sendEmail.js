"use strict";

//获取服务器时间

var express = require('express');
var router = express.Router();

var emailPoster = require("../../helpers/email");

//var toArr = ['527426267@qq.com', 'zhoulongqiang@uzai.com', '496276895@qq.com', 'xiaojiaqiang@uzai.com', 'lixuquan@uzai.com', 'xiali@uzai.com', 'chimeihuan@uzai.com', 'lulisheng@uzai.com', 'hewen@uzai.com', 'tudingyi@uzai.com'];
var toArr = ['527426267@qq.com'];

/* GET home page. */
router.get('/', function (req, res, next) {

    var obj = {};

    var qUrl = decodeURIComponent(req.query.url);
    var qType = decodeURIComponent(req.query.type);

    //发送邮件
    var cfg = {};
    cfg.from = config.email.from;
    cfg.to = toArr.join(',');
    cfg.subject = "悠哉网站资源文件错误日志邮件：" + qType;
    cfg.html = "<h1>悠哉网站资源文件错误日志邮件：" + qType + "</h1>";
    cfg.html += "<p><b>错误类型：</b>" + qType + "</p>";
    cfg.html += "<p><b>错误网址：</b>" + qUrl + "</p>";
    cfg.html += "<p><b>API来自：</b>http://node.uzaicdn.com/apis/sendEmail</p>";
    cfg.html += "<p><b>JSONP请求来自：</b>" + decodeURIComponent(req.url) + "</p>";
    cfg.html += "<hr/>";
    cfg.html += "<p>系统邮件，请勿回复！</p>";

    var poster = new emailPoster(cfg);
    poster.send();

    obj.success = true;

    //util.log('params: ' + JSON.stringify(req.params));
    //util.log('body: ' + JSON.stringify(req.body));
    //util.log('query: ' + JSON.stringify(req.query));
    //util.log(req);

    res.jsonp(obj);

});

module.exports = router;
