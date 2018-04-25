#pj=/tmp/work/Gulp.TestProject
pj=$(cd $(dirname $0); pwd)
[ -d $pj/node_modules ] && { echo "node_modules/はすでに存在します。"; return; }
#mkdir -p $pj
cd $pj
npm init -y
npm i -D gulp
npm i -D gulp-stylus
npm i -D gulp-pug
npm i -D gulp-plumber
npm i -D gulp-notify
npm i -D browser-sync

npm i -D webpack
npm i -D webpack-stream
npm i -D gulp-babel
npm i -D babel-core
npm i -D babel-loader
npm i -D babel-polyfill
npm i -D babel-preset-env

npm i highlightjs
npm i markdown-it
npm i markdown-it-ruby
npm i markdown-it-kbd

. ./init_project.sh
