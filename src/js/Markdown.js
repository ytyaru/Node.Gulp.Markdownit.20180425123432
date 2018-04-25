export default class Markdown {
    constructor () {
        this._parser = this._CreateParser();
        //this._source = "# マークダウン";
        this._source = `# マークダウン
## H2
### H3
#### H4
##### H5
###### H6

{超電磁砲|レールガン}。

[[ Ctrl + X ]]

\`\`\`js
export class MyClass {
    constructor () {
        this.value = 100;
    }
}
\`\`\`

A|B
-|-
C|D
E|F

* A
* B


`;
        this._CreateParser();
    }
    get Source() { return this._source; }
    get Parser() { return this._parser; }
    ToAppend(element) {
        console.log(element);
        //element.appendChild(this.Parser.render(this.Source));
        let html = this.Parser.render(this.Source);
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
    _CreateParser() {
        this._parser = require('markdown-it')(this._CreateMarkdownItOption())
//            .use(require('markdown-it-ruby'))
//            .use(require('markdown-it-kbd'))
    }
    _CreateMarkdownItOption() {
        //const hljs = require('highlight.js'); // https://highlightjs.org/
        const hljs = require('highlightjs'); // https://highlightjs.org/
        hljs.initHighlightingOnLoad();
        return {
            html: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                       hljs.highlight(lang, str, true).value +
                       '</code></pre>';
                } catch (__) {}
            }
            return '<pre class="hljs"><code>' + this.Parser.utils.escapeHtml(str) + '</code></pre>';
            }
        }
    }
}
