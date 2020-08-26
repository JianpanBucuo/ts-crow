"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = require("./crowller");
var dellAnalyzer_1 = require("./dellAnalyzer");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <title></title>\n        </head>\n        <body>\n            <form method=\"get\" action='/login'>\n            <a href=\"/getdata\">get data</a>\n                <button type=\"submit\">\u767B\u5F55</button>\n            </form>\n        </body>\n        </html>\n        ");
});
router.get('/getdata', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        var secretKey = 'PP87ANTIPIRATE';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secretKey;
        var analyzer = dellAnalyzer_1.DellAnalyzer.getInstance();
        var crowller = new crowller_1.Crowller(url, analyzer);
        res.send('get Data success');
    }
    else {
        res.send(req.name + 'password error');
    }
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('Login already');
    }
    if (password === '123' && req.session) {
        req.session.login = true;
        res.send('Login success');
    }
    else {
        res.send('Login failed');
    }
});
router.get('/login', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    console.log(isLogin);
    res.send("\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title></title>\n    </head>\n    <body>\n        <form method=\"post\" action='/login'>\n            <input type=\"password\" name=\"password\">\n            <button type=\"submit\">\u786E\u8BA4</button>\n        </form>\n    </body>\n    </html>\n    ");
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
router.get('/showdata', function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result_1 = fs_1.default.readFileSync(position, 'utf-8');
        res.json(JSON.parse(result_1));
    }
    catch (_a) {
        res.send('无内容');
    }
});
exports.default = router;
