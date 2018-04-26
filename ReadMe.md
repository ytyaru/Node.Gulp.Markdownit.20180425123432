# このソフトウェアについて

Node.jsでマークダウンをパースする環境構築

* [前回](https://github.com/ytyaru/Gulp.Install.20180425070000)を継承した環境

# 使い方

## node_modules インストール

```sh
$ cd (このディレクトリ)
$ npm i
```

* package.json
* node_modules/
* dst/

[※](memo/install.md)

## 起動

```sh
$ cd (このディレクトリ)
$ gulp
```

* ビルド（ファイル結合, トランスパイル）
* ブラウザ起動

なお、`./dst/`配下のpug,stylus,jsのソースコードが変更されるたびに自動でビルド＆ブラウザ更新される。詳細は[gulpfile.js](gulpfile.js)参照。

## ブラウザ自動更新が残念

なぜかうまく反映されない。原因不明。最初はブラウザのキャッシュが残っているせいかと思ったが違うと思う。ブラウザのメニューから履歴削除しても反映されなかったから。また、再起動しても同様。`gulp`コマンド実行後、ローカルサーバを`Ctrl+C`で終了し、再起動しても変わらず。

試行錯誤しているうちに、反映される手順をみつけた。それが以下。だが、無駄な操作が多くて時間がかかる。

1. `./src/js/`など、変更されたら再ビルドする設定になっているファイルをvimで開く
1. `wq`で閉じる
1. ブラウザのリロード完了を待つ（20秒）
1. 上記を3回ほどくりかえす
1. 反映される

なぜか何度も書込をくりかえさねば反映されない。謎。

### 起動

ローカルサーバ、ブラウザ、が起動し、./index.htmlが表示される。

ローカルサーバはターミナルで`Ctrl+C`キー入力すれば停止できる。(Ctrl+Zで強制終了してしまうとプロセスが残ってしまう模様)[※](run.md)

# 実装時にハマったこと

vimでインデント設定してやらないとエラーになる。[※](memo/vim.md)

# 開発環境

2018-04-24時点。[※](memo/install.md)

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * vim 7.4
        * Chromium 56.0.2924.84
        * Node.js 9.4.0
            * npm 5.6.0
                * n 2.1.7
                * Gulp 3.9.1
                    * 他
                        * gulp-plumber 1.2.0
                        * gulp-notify 3.2.0
                        * browser-sync 2.23.7
                    * HTML
                        * gulp-pug 4.0.1
                    * CSS
                        * gulp-stylus 2.7.0
                    * JS
                        * webpack 4.6.0
                        * webpack-stream 4.0.3
                        * gulp-babel 7.0.1
                        * babel 6.23.0
                        * babel-env 2.4.1
                        * babel-polyfill 6.26.0
                        * babel-preset-env 1.6.1
                    * Markdown
                        * highlightjs 9.10.0
                        * markdown-it 8.4.1
                        * markdown-it-anchor 4.0.0
                        * markdown-it-deflist 2.0.3
                        * markdown-it-kbd 1.1.1
                        * markdown-it-multimd-table 3.1.2
                        * markdown-it-ruby 0.1.1

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

