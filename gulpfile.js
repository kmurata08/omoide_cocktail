var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

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
 * webサーバ(開発)
 */
gulp.task('webserver', function() {
    gulp.src('./app').pipe(
        $.webserver({
            host: 'localhost',
            port: 8000,
            livereload: true,
            open: true
        })
    );
});

/**
 * webサーバ(本番)
 */
gulp.task('webserver-prod', function() {
    return gulp.src('./dist').pipe(
        $.webserver({
            host: 'localhost',
            port: 8000,
            open: true
        })
    );
});

/**
 * distにアプリをコピー
 */
var srcFiles = [
    'app/*.html',
    'app/**/*.png',
    'app/**/*.gif',
    'app/**/*.svg',
    'app/**/*.jpg',
    'app/**/*.min.js',
    'app/**/*.min.css'
]
gulp.task('build-app', function() {
    return gulp.src(srcFiles)
        .pipe(gulp.dest('dist'));
});

/**
 * distディレクトリ削除
 */
gulp.task('clean-dist', function() {
    return gulp.src('dist', {read: false})
        .pipe($.clean());
});

/**
 * メインタスク
 */
gulp.task('start', ['minify-css', 'minify-js', 'watch-css', 'watch-js', 'webserver']);
gulp.task('build', function(callback) {
    runSequence('clean-dist', 'build-app', 'webserver-prod', callback);
});
