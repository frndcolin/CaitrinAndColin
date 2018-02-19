var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var path = require('path');
var watch = require('gulp-watch');
var concatCss = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    return gulp.src('./src/css/loader.css')
        .pipe(concatCss('bundled.css'))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
});
//
//gulp.task('css', function () {
//    var plugins = [
//        autoprefixer({browsers: ['last 1 version']}),
//        cssnano()
//    ];
//    return gulp.src('./src/*.css')
//        .pipe(postcss(plugins))
//        .pipe(gulp.dest('./dest'));
//});
//
//gulp.task('build-css', function(){
//    return gulp.src('src/css/loader.css')
//        .pipe(concatCss('bundled.css'))
//        .pipe(gulp.dest('public/css'));
//});
//
//gulp.task('sitemap', function () {
//    gulp.src('dist/index.html', {
//            read: false
//        })
//        .pipe(sitemap({
//            siteUrl: 'http://www.elfin-hearing.surge.sh'
//        }))
//        .pipe(gulp.dest('./dist/maps/'));
//});