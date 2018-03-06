//   ../node_modules/.bin/webpack
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var pug = require('gulp-pug');
var babel = require("gulp-babel");

//var path = require('path');
//var watch = require('gulp-watch');
var concatCss = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('site-css', function () {
    return gulp.src('./src/css/loader.css')
        .pipe(concatCss('bundled.min.css'))
//        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
//        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('vendor-css', function () {
    return gulp.src('./public/vendor/*.css')
        .pipe(concatCss('vendor.min.css'))
//        .pipe(sourcemaps.init())
        .pipe(postcss([cssnano()]))
//        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('playlist-css', function () {
    return gulp.src('./src/css/playlist.css')
        .pipe(postcss([ autoprefixer(), cssnano()]))
        .pipe(gulp.dest('./public/css'));
});

gulp.task("g-bab", function () {
  return gulp.src("src/js/**.js")
    .pipe(babel())
    .pipe(gulp.dest("public/js"));
});

