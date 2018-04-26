# HTML5 tag

どんな文書を書くかで必要な要素が異なる。

## 用途

* 小説（縦書き日本語文章）
* chat風（`p`が「」か、吹き出しか、ゲームのメッセージウインドウ）
* エンドロール風（スタッフロール、スターウォーズのあれ）
* 技術書
    * 論文（CSS3(block,flex)）
    * 手順書（ol, ul）
* 報告書

## HTML5以外

* SVG
    * ダイアグラム出力言語の出力結果
* MathXML
    * 数学の記号などを出力する

## モジュール化

```asciidoc
include::test.ad[]
```

```asciidoc
[source, python]
----
include::test.py[lines=4..5]
----
```

これをもっと簡単に記述したい。

```
[./some.py]
```
```
\`\`\`[./some.py]
```
```
\`\`\`[./some.py,4..5]
```
```
\`\`\`[./some.py,4..5,name]
```
```
\`\`\`[./some.py,4..5,path]
```
```
\`\`\`[./some.py,4..5,1]
```
```
\`\`\`["./some.py", context=code, lang=python, line=4..5, path=後ろからいくつまで, expand]
```

* context
    * text
        * code
        * samp
            * shell
            * dialog
    * diagram
        * list
        * table
        * tree
        * UML
        * flowchart
    * chart
* path
    * path=0でパス非表示
    * path=1でファイル名のみ
    * path=2で直上の親＋ファイル名
    * 未設定(デフォルト.path=-1)でフルパス表示
* expand
    * 開閉`<details>`

## dl

http://www.htmq.com/html5/dl.shtml

規格|用途
----|----
HTML4.01|定義の説明
HTML5|説明や定義

ちょっとしたメタデータの表示に最適。

```
説明1|内容1
説明2|内容2
説明3|内容3
説明4|内容4
```

### 複数dd

```html
<dl>
<dt>作者</dt>
<dd>ジョン</dd>
<dd>ポール</dd>
<dd>ジョージ</dd>
<dd>リンゴ</dd>
</dl>
```

### 複数dt

```html
<dl>
<dt lang="ja"><dfn>色</dfn></dt>
<dt lang="en-US"><dfn>color</dfn></dt>
<dt lang="en-GB"><dfn>colour</dfn></dt>
<dd>可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。</dd>
</dl>
```

### dt,dlが1つずつ

```html
<dl>
<dt lang="ja"><dfn>色</dfn></dt>
<dt lang="en-US"><dfn>color</dfn></dt>
<dt lang="en-GB"><dfn>colour</dfn></dt>
<dd>可視光線の波長の長短によって人が視覚で感じ分けられる色覚・色刺激のこと。</dd>
</dl>
```

### 使い方

意味が曖昧。dtとddの数が曖昧。使い方はいくつか考えられる。

データ構造|説明
----------|----
and|すべての`dd`は`dt`の一部である
or|`dt`は`dd`のうちどれかひとつのみ
sequence|`dt`は`dt`の一連の操作を順に行った結果である

## 手順

ol, dl, どちらを使うべきか。

```
ol|順序付きリスト
dl|name-value
```

olを使うべき。でも、markdownで複数行の`ol`が書けない。また、タイトルを付けられない。

内部に入れれば、複数行でも順序が保たれる。

```html
<ol>
    <li>
        <pre><code>
$ cd
$ echo
</code></pre>
    </li>
    <li>あばば</li>
</ol>
```

```markdown
1. 手順1
    \`\`\`sh
    $ cd
    $ echo
    \`\`\`
1. 手順2
```

```asciidoc
. python2
+
[source, python]
----
include::python2.py[]
----
. python3
+
[source, python]
----
include::python3.py[]
----
```

## Table

### 複数行HTML包含

`markdown-it-multimd-table`プラグインを使っても複数行HTMLは左側しかできない。

```
First header | Second header
-------------|---------------
List:        | More  \\
1. over      | data  \\
1. several   |       \\
1. lines     |
```

左側が概要で右側が詳細にしたい。

```
First header | Second header
-------------|---------------
List:        | More  \\
1. over      | data  \\
1. several   |       \\
1. lines     |
```

以下のようにしてはどうか？　でもこれ、素直にHTMLで書いたほうが早くないか？

```
First header | Second header
-------------|---------------
List:        | More
1. over      | data
1. several   |       
1. lines     |
-------------|---------------
```

または参照する。でもこれ、見た目が壊れる。

```
First header | Second header
-------------|---------------
[0]|[1]

[]:
    List:
    1. over
    1. several       
    1. lines

[]:
    More
    data
```

## ポップアップ（ツールチップ）

リンク先をマウスオーバーするとポップアップする奴。

* title属性値

だが、スマホではマウスオーバーができない。タップするのは大げさ。

`ruby`, `small`, `details`などのタグを使うほうが良い。

## kbd, samp

```html
<kbd>V</kbd>
```
```html
<kbd><kbd>Ctrl</kbd>+<kbd>V</kbd></kbd>
```
```html
<kbd><samp>メニュー項目</samp></kbd>をクリックする。
```
```html
<samp>名前：<kbd>山田</kbd></samp></kbd>
```

これらをMDで端的に表現したい。

```
[[V]]
```
```
[[Ctrl + V]]
```
```
[[メニュー項目]]
```
```
\`samp:名前：[[山田]]\`
```
```
\`\`\`samp
名前：[[山田]]
年齢：不詳
\`\`\`
```

```
[ [Ctrl V]]
[,[Ctrl,V]]
[+[Ctrl+V]]
[ [y y]]
[ ["y y"]]
[[y y]]
```

## HTML5

### 一般

* ruby

### コンピュータ資料

* kbd
* samp

ほかにも、以下のようなものが欲しい。

* shell入出力画面
* ファイルツリー
* ダイアログ画面
* パンくずリスト

### UI

* form, fieldset, legend
* button, input, select(datalist,optgroup,option), textarea, meter, label
* output, progress
* details(summary), menu

### 構造


