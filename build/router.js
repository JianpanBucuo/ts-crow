"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = require("./crowller");
var dellAnalyzer_1 = require("./dellAnalyzer");
var router = express_1.Router();
router.get('/', function (req, res) { return res.send('Hello World!'); });
router.post('/getdata', function (req, res) {
    console.log(req);
    var password = req.body.password;
    if (password === '123') {
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
router.get('/login', function (req, res) {
    res.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <title></title>\n        </head>\n        <body>\n            <form method=\"post\" action='/getdata'>\n                <input type=\"password\" name=\"password\">\n                <button type=\"submit\">\u786E\u8BA4</button>\n            </form>\n        </body>\n        </html>\n        ");
});
exports.default = router;
