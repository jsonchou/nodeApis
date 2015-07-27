"use strict";

//jsonchou util
exports.log = function (msg) {
    console.log('\r\n####################---时间：' + new Date().toLocaleString());
    console.log("\r\n" + msg + "\r\n");
    console.log('####################\r\n');
}

//过滤危险字符
exports.saveWords = function (content) {
    jc.log(content);
    if (!content) {
        return '';
    }
    return content;
}
 
//简单数组去重
exports.arrayUnique = function (arr) {
    if (arr && arr.length > 1) {
        //数组去重
        var res = [];
        var json = {};
        for (var i = 0; i < arr.length; i++) {
            if (!json[arr[i]]) {
                res.push(arr[i]);
                json[arr[i]] = 1;
            }
        }
        return res;
    }
    return arr;
}

