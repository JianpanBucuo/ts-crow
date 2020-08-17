"use strict";
var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    Teacher.prototype.getInfo = function (key) {
        // if (key === 'name' || key === 'age') {
        // return this.info[key]
        // }
        return this.info[key];
    };
    return Teacher;
}());
var teacher = new Teacher({
    name: 'nic', age: '11'
});
var test = teacher.getInfo('name');
var x = teacher.getInfo('age');
console.log(test, x);
