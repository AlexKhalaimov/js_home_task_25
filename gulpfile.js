'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');
var spritesmith = require("gulp-spritesmith");
var gulpif = require("gulp-if");
var spritesmith = require('gulp.spritesmith');
const imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sprites', function () {
    return  gulp.src('./img/png/*.png')
                .pipe(tasks.spritesmith({
                    imgName: 'sprite.png',
                    styleName: 'sprite.css',
                    imgPath: '../img/sprite.png'
                }))
                .pipe(gulpif('*.png', gulp.dest('./dist/img/')))
                .pipe(gulpif('*.css', gulp.dest('./dist/css/')));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('img/sprites'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
