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

[日本語名アンカー](#日本語名アンカー)

{ruby base|rubytext}

{超電磁砲|レールガン}。

[[ X ]]

[[ Ctrl + X ]]

[[ [[Ctrl]] + [[X]] ]]

\`\`\`js
export class MyClass {
    constructor () {
        this.value = 100;
    }
}
\`\`\`

## 定義リスト（dl, dt, dd）

### 単一行

Term 1
: Definition 1
Term 2 with *inline markup*
: Definition 2

### 複数行

Term 1
:   Definition
with lazy continuation.

    Second paragraph of the definition.

### 複数dd

Term 1
  ~ Definition 1
Term 2
  ~ Definition 2a
  ~ Definition 2b

### 複数dd

Term 1
  :    paragraph
Term 2
  :     code block

abc.

Term 1
  :    paragraph
Term 2
  :     code block

        $ cd
        $ echo


## テーブル

### 列結合

A|B|C
-|-|-
1|2|3
4|5|
6||
|7|
||8
9||10
|11|12

### 行結合

First header | Second header
-------------|---------------
List:        | More  \
- over       | data  \
- several    |       \
- lines      |

### 行結合(バックスラッシュ2つ)

First header | Second header
-------------|---------------
List:        | More  \\
- over       | data  \\
- several    |       \\
- lines      |

### 行結合(list)

First header | Second header
-------------|---------------
List:        | More  \\
1. over      | data  \\
1. several   |       \\
1. lines     |

### 行結合(左側)

First header | Second header
-------------|---------------
title \\     | List:
      \\     | 1. over
      \\     | 1. several
             | 1. lines

### 行結合(list)

First header | Second header
-------------|---------------
List:        | More  \\
1. [google]  | data  \\
1. several   |       \\
1. lines     |

[google]: https://www.google.co.jp

### 単純テーブル

A|B
-|-
C|D
E|F

## リスト

* A
* B

a

1. A
1. B

b

A. A
A. B

c

a. A
a. B

末尾にスペース二つで  
改行  
\`<br/>\`  

# 日本語名アンカー

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
            .use(require('markdown-it-anchor'), this._CreateAnchorOption())
            .use(require('markdown-it-ruby'))
            .use(require('markdown-it-kbd'))
            .use(require('markdown-it-deflist'))
            .use(require('markdown-it-multimd-table'), {enableMultilineRows: true})
    }
    _CreateMarkdownItOption() {
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
    _CreateAnchorOption() {
        //return {};
        return {
            slugify: function (header) {
                return encodeURI(header.trim()
                    .toLowerCase()
                    .replace(/[\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~]/g, '')
                    .replace(/\s+/g, '-')) // Replace spaces with hyphens
                    .replace(/\-+$/, ''); // Replace trailing hyphen
              }
        }
    }
}
