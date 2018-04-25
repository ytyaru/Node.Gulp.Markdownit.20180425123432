"use strict";

var _highlightPackMin = require("./highlight.pack.min.js");

var _highlightPackMin2 = _interopRequireDefault(_highlightPackMin);

var _Markdown = require("./Markdown.js");

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {Markdown} from "./Markdown";
//import hljs from "./node_modules/highlightjs/highlight.pack.min.js";
document.addEventListener('DOMContentLoaded', function () {
    //hljs.initHighlightingOnLoad();
    _highlightPackMin2.default.initHighlighting();
    var m = new _Markdown2.default();
    console.log(document.body);
    m.ToAppend(document.body);
    //import {Sub} from "./Sub";
    //let sub = new Sub();
    //sub.Show();
    //import {hello} from "./sub";
    //hello();
}, false);