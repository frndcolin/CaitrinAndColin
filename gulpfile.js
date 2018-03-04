//   ../node_modules/.bin/webpack
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var babel = require("gulp-babel");

//var path = require('path');
//var watch = require('gulp-watch');
var concatCss = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    return gulp.src('./src/css/loader.css')
        .pipe(concatCss('bundled.css'))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task("g-bab", function () {
  return gulp.src("src/js/**.js")
    .pipe(babel())
    .pipe(gulp.dest("public/js"));
});

//gulp.task('sitemap', function () {
//    gulp.src('dist/index.html', {
//            read: false
//        })
//        .pipe(sitemap({
//            siteUrl: 'http://www.elfin-hearing.surge.sh'
//        }))
//        .pipe(gulp.dest('./dist/maps/'));
//});