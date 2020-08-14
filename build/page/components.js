"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerHTML = 'Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerHTML = 'Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerHTML = 'Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
