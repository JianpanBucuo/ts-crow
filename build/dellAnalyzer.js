"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DellAnalyzer = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var DellAnalyzer = /** @class */ (function () {
    function DellAnalyzer() {
    }
    DellAnalyzer.getInstance = function () {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    };
    DellAnalyzer.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    DellAnalyzer.prototype.getCourseInfo = function (html) {
        var courseInfos = [];
        var $ = cheerio_1.default.load(html);
        var courseItem = $('.course-item');
        courseItem.map(function (v, i) {
            var desc = $(i).find('.course-desc').eq(0).text();
            courseInfos.push({
                title: desc
            });
        });
        var result = {
            time: (new Date()).getTime(),
            data: courseInfos
        };
        return result;
    };
    DellAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    return DellAnalyzer;
}());
exports.DellAnalyzer = DellAnalyzer;
exports.default = DellAnalyzer;
