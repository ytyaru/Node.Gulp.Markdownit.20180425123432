'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Markdown = function () {
    function Markdown() {
        _classCallCheck(this, Markdown);

        this._parser = this._CreateParser();
        //this._source = "# マークダウン";
        this._source = '# \u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n{ruby base|rubytext}\n\n{\u8D85\u96FB\u78C1\u7832|\u30EC\u30FC\u30EB\u30AC\u30F3}\u3002\n\n[[ X ]]\n\n[[ Ctrl + X ]]\n\n```js\nexport class MyClass {\n    constructor () {\n        this.value = 100;\n    }\n}\n```\n\nA|B\n-|-\nC|D\nE|F\n\n* A\n* B\n\n\n';
        this._CreateParser();
    }

    _createClass(Markdown, [{
        key: 'ToAppend',
        value: function ToAppend(element) {
            console.log(element);
            //element.appendChild(this.Parser.render(this.Source));
            var html = this.Parser.render(this.Source);
            console.log(html);
            element.innerHTML += html;
        }
        /*
        _ToHtml() {
            const html = this.Parser.render(this.Source)
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            if (0 < doc.querySelectorAll('parsererror').length) {
                throw new Error('パースエラー', html);
            }
        }
        */

    }, {
        key: '_CreateParser',
        value: function _CreateParser() {
            this._parser = require('markdown-it')(this._CreateMarkdownItOption()).use(require('markdown-it-ruby')).use(require('markdown-it-kbd'));
        }
    }, {
        key: '_CreateMarkdownItOption',
        value: function _CreateMarkdownItOption() {
            //const hljs = require('highlight.js'); // https://highlightjs.org/
            var hljs = require('highlightjs'); // https://highlightjs.org/
            hljs.initHighlightingOnLoad();
            return {
                html: true,
                highlight: function highlight(str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
                        } catch (__) {}
                    }
                    return '<pre class="hljs"><code>' + this.Parser.utils.escapeHtml(str) + '</code></pre>';
                }
            };
        }
    }, {
        key: 'Source',
        get: function get() {
            return this._source;
        }
    }, {
        key: 'Parser',
        get: function get() {
            return this._parser;
        }
    }]);

    return Markdown;
}();

exports.default = Markdown;