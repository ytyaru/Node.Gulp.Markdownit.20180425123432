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
        this._source = '# \u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n[\u65E5\u672C\u8A9E\u540D\u30A2\u30F3\u30AB\u30FC](#\u65E5\u672C\u8A9E\u540D\u30A2\u30F3\u30AB\u30FC)\n\n{ruby base|rubytext}\n\n{\u8D85\u96FB\u78C1\u7832|\u30EC\u30FC\u30EB\u30AC\u30F3}\u3002\n\n[[ X ]]\n\n[[ Ctrl + X ]]\n\n[[ [[Ctrl]] + [[X]] ]]\n\n```js\nexport class MyClass {\n    constructor () {\n        this.value = 100;\n    }\n}\n```\n\n## \u5B9A\u7FA9\u30EA\u30B9\u30C8\uFF08dl, dt, dd\uFF09\n\n### \u5358\u4E00\u884C\n\nTerm 1\n: Definition 1\nTerm 2 with *inline markup*\n: Definition 2\n\n### \u8907\u6570\u884C\n\nTerm 1\n:   Definition\nwith lazy continuation.\n\n    Second paragraph of the definition.\n\n### \u8907\u6570dd\n\nTerm 1\n  ~ Definition 1\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n### \u8907\u6570dd\n\nTerm 1\n  :    paragraph\nTerm 2\n  :     code block\n\nabc.\n\nTerm 1\n  :    paragraph\nTerm 2\n  :     code block\n\n        $ cd\n        $ echo\n\n\n## \u30C6\u30FC\u30D6\u30EB\n\n### \u5217\u7D50\u5408\n\nA|B|C\n-|-|-\n1|2|3\n4|5|\n6||\n|7|\n||8\n9||10\n|11|12\n\n### \u884C\u7D50\u5408\n\nFirst header | Second header\n-------------|---------------\nList:        | More  - over       | data  - several    |       - lines      |\n\n### \u884C\u7D50\u5408(\u30D0\u30C3\u30AF\u30B9\u30E9\u30C3\u30B7\u30E52\u3064)\n\nFirst header | Second header\n-------------|---------------\nList:        | More  \\\n- over       | data  \\\n- several    |       \\\n- lines      |\n\n### \u884C\u7D50\u5408(list)\n\nFirst header | Second header\n-------------|---------------\nList:        | More  \\\n1. over      | data  \\\n1. several   |       \\\n1. lines     |\n\n### \u884C\u7D50\u5408(\u5DE6\u5074)\n\nFirst header | Second header\n-------------|---------------\ntitle \\     | List:\n      \\     | 1. over\n      \\     | 1. several\n             | 1. lines\n\n### \u884C\u7D50\u5408(list)\n\nFirst header | Second header\n-------------|---------------\nList:        | More  \\\n1. [google]  | data  \\\n1. several   |       \\\n1. lines     |\n\n[google]: https://www.google.co.jp\n\n### \u5358\u7D14\u30C6\u30FC\u30D6\u30EB\n\nA|B\n-|-\nC|D\nE|F\n\n## \u30EA\u30B9\u30C8\n\n* A\n* B\n\na\n\n1. A\n1. B\n\nb\n\nA. A\nA. B\n\nc\n\na. A\na. B\n\n\u672B\u5C3E\u306B\u30B9\u30DA\u30FC\u30B9\u4E8C\u3064\u3067  \n\u6539\u884C  \n`<br/>`  \n\n# \u65E5\u672C\u8A9E\u540D\u30A2\u30F3\u30AB\u30FC\n\n';
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
            this._parser = require('markdown-it')(this._CreateMarkdownItOption()).use(require('markdown-it-anchor'), this._CreateAnchorOption()).use(require('markdown-it-ruby')).use(require('markdown-it-kbd')).use(require('markdown-it-deflist')).use(require('markdown-it-multimd-table'), { enableMultilineRows: true });
        }
    }, {
        key: '_CreateMarkdownItOption',
        value: function _CreateMarkdownItOption() {
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
        key: '_CreateAnchorOption',
        value: function _CreateAnchorOption() {
            //return {};
            return {
                slugify: function slugify(header) {
                    return encodeURI(header.trim().toLowerCase().replace(/[\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~]/g, '').replace(/\s+/g, '-')) // Replace spaces with hyphens
                    .replace(/\-+$/, ''); // Replace trailing hyphen
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