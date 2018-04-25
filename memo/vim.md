# vim

## インデント

スペースとタブが混在してしまった。テキストエディタでインデントを指定する必要があった。

```sh
$ gulp
[10:01:09] Using gulpfile /tmp/work/Gulp.Install.20180424090000/gulpfile.js
[10:01:09] Starting 'stylus'...
[10:01:09] Starting 'browser-sync'...
[10:01:09] Finished 'browser-sync' after 253 ms
[10:01:09] Starting 'pug'...
[10:01:09] Finished 'pug' after 7.38 ms
[10:01:09] Starting 'watch'...
[10:01:09] Finished 'watch' after 19 ms
[10:01:09] gulp-notify: [Error running Gulp] Error: /tmp/work/Gulp.Install.20180424090000/src/pug/main.pug:4:1
    2| html
    3|     head
  > 4| 	meta(charset="utf-8")
-------^
    5| 	title Gulpプロジェクト作成
    6| 	link(rel="styleseet",href="./dst/css/style.css")
    7|     body

Invalid indentation, you can use tabs or spaces but not both
...
```

## ちらつきとプチフリーズ

上記設定のついでに以下サイトで色々やった。

https://qiita.com/mfujimori/items/9fd41bcd8d1ce9170301

その中で、`~/.vimrc`でビープ音を可視化できる設定がある。

```vimrc
set visualbell
```

しかしこれが非常にウザい。

画面が一瞬真っ白にフラッシュし、ちらつくように見える。カーソルを行末や行頭に移動してなおカーソルキーを押下しつづけるだけで発生する。

* 画面フラッシュが非常に目障り
* 押下しつづけた時間だけ応答が返ってこなくなる

OFFにしておいたほうがいい。

# 開発環境

2018-04-24時点。

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * vim 7.4
        * Chromium 56.0.2924.84
        * Node.js 9.4.0
            * npm 5.6.0
                * n 2.1.7
                * Gulp 3.9.1
                    * gulp-stylus 2.7.0
                    * gulp-pug 4.0.1
                    * gulp-plumber 1.2.0
                    * gulp-notify 3.2.0
                    * browser-sync 2.23.7

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
