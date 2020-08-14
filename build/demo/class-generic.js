"use strict";
var DataManager = /** @class */ (function () {
    function DataManager(data) {
        this.data = data;
    }
    DataManager.prototype.getItem = function (index) {
        return this.data[index].name;
    };
    return DataManager;
}());
var data = new DataManager([{ name: '1' }]);
console.log(data.getItem(0), data.getItem(1));
var func = function (params) {
    return params;
};
