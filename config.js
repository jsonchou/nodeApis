"use strict";
var config = {
    db: {},
    email: {},
    tab: {},
    site: {}
}

//db����
config.db = {
    email: 'name@gmail.com',
    user: 'root',
    pass: 'password',
    host: 'mongodb://10.1.13.18:27017/test'
}

//��������
config.email = {
    secure:true,
    port: 25,
    host: 'smtp.163.com',
    from: 'name@163.com',
    pass: 'password'
}

//����
config.tab = {
    share: '����',
    ask: '�ʴ�',
    job: '��Ƹ'
}

//վ������
config.site = {
    name: 'uzai apis',
    cookieSecret:'jsonchou',
    cookieAge: 7,//cookie ���ڣ�Ĭ��7��
    debug: true,
    port: 80,
    avatorPath: './public/files/avator',
    pageSize: 25,
    imgType: ['jpg', 'gif', 'png'],
    domain:'node.uzaicdn.com',
    url: 'http://' + config.site.domain
}

//+/-���⣬+/-5����
//+/-�ظ���+/-1����
//+������+20����
//+�ö���+100����
//+��¼��+1����

module.exports = config;