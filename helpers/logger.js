"use strict";

var fs = require('fs');

//自定义服务器日志记录

//追加
exports.append = function (info) {

    var time = new Date();
    var fileFolder = "../bin/log/serverlog/";
    var fileName = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + '.log';
    var fileFullPath = fileFolder + fileName;

    var sb = [];
    sb.push('\r\n####################---时间：' + new Date().toLocaleString());
    sb.push("\r\n" + info + "\r\n");
    sb.push('####################\r\n');

    fs.exists(fileFullPath, function (exists) {
        fs.appendFileSync(fileFullPath, sb.join(''), "utf8");
    });

}