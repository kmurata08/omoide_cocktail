var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 * scssをcssに変換して圧縮
 */
gulp.task('minify-css', function() {
    return gulp.src('./static/css/styles.scss')
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.pleeease({
            minifier: true,
        }))
        .pipe($.rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./static/css'));
});

/**
 * jsを圧縮
 */
gulp.task('minify-js', function() {
    return gulp.src("./static/js/script.js")
        .pipe($.uglify())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./static/js'));
});

/**
 * cssウォッチャー
 */
gulp.task('watch-css', function() {
    gulp.watch('./static/css/styles.scss', ['minify-css']);
});

/**
 * jsウォッチャー
 */
gulp.task('watch-js', function() {
    gulp.watch('./static/js/script.js', ['minify-js']);
});

/**
 * webサーバ
 */
gulp.task('webserver', function() {
    gulp.src('./').pipe(
        $.webserver({
            host: 'localhost',
            port: 8000,
            livereload: true,
            open: true
        })
    );
});

/**
 * メインタスク
 * タスク立ち上げ時と、ファイル更新時に圧縮
 */
gulp.task('start', ['minify-css', 'minify-js', 'watch-css', 'webserver']);
