"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
var port = 3000;
app.use(cookie_session_1.default({
    name: 'session',
    keys: ['nic'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    req.name = 'aaa';
    next();
});
app.use(router_1.default);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
// 1. express库的类型描述不准确
