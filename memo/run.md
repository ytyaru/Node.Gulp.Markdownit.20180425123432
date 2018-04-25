# 実行

ローカルサーバ、ブラウザ、が起動し、./index.htmlが表示される。

ローカルサーバはターミナルで`Ctrl+C`キー入力すれば停止できる。(Ctrl+Zで強制終了してしまうとプロセスが残ってしまう？)

```sh
$ gulp
[11:17:58] Using gulpfile /tmp/work/Gulp.Install.20180424090000/gulpfile.js
[11:17:58] Starting 'stylus'...
[11:17:58] Starting 'browser-sync'...
[11:17:58] Finished 'browser-sync' after 245 ms
[11:17:58] Starting 'pug'...
[11:17:58] Finished 'pug' after 7.28 ms
[11:17:58] Starting 'watch'...
[11:17:58] Finished 'watch' after 19 ms
[11:17:59] Finished 'stylus' after 918 ms
[11:17:59] Starting 'default'...
[11:17:59] Finished 'default' after 188 μs
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3006
    External: http://192.168.11.2:3006
 -------------------------------------
          UI: http://localhost:3007
 UI External: http://192.168.11.2:3007
 -------------------------------------
[Browsersync] Serving files from: ./
^C
```

