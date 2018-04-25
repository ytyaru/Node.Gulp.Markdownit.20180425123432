const gulp = require("gulp");
const stylus = require("gulp-stylus");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const notify = require("gulp-notify");
const pug = require("gulp-pug");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const babel = require("gulp-babel");
gulp.task('default', ['stylus', 'browser-sync', 'pug', 'webpack', 'babel', 'watch']);

//sassとpugの監視をして変換処理させる
gulp.task('watch', () => {
    gulp.watch(['./src/stylus/**'], () => {
        gulp.start(['stylus']);
    });
    gulp.watch(['./src/pug/**'], () => {
        gulp.start(['pug']);
    });
    gulp.watch(['./src/js/**'], () => {
        gulp.start(['webpack']);
        gulp.start(['babel']);
    });
});

//ブラウザ表示
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"   //サーバとなるrootディレクトリ
        }
    });
    //ファイルの監視
    //以下のファイルが変わったらリロードする
    gulp.watch("./dst/js/**/*.js",     ['reload']);
    gulp.watch("./dst/*.html",         ['reload']);
});

//stylをcssに変換
gulp.task('stylus', function() {
    return gulp.src("./src/stylus/**/*.styl")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(stylus({
            compress: true,
            use: [
                // 例
                // koutoSwiss(),
            ]
        }))
        .pipe(gulp.dest("./dst/css"))
        //reloadせずにinjectする
        .pipe(browserSync.stream())
});
//pugをhtmlに変換
gulp.task("pug", () => {
    var option = {
        pretty: true
    }
    gulp.src("./src/pug/**/*.pug")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(pug(option))
        .pipe(gulp.dest("./"))
});

gulp.task('webpack', () => {
    // ☆ webpackStreamの第2引数にwebpackを渡す☆
    return webpackStream(webpackConfig, webpack)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(gulp.dest("./dst/js"));
});

// babel
gulp.task('babel', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dst/js'));
});

//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});
