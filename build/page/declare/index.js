"use strict";
///<reference path='./components.ts' />
/**
 * 只是手动说明这个文件引用了 components，没有实际引用的作用
 */
/**
 * namespace 命名空间
 *
 * 融入模块化的思想
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
new Home.Page();
