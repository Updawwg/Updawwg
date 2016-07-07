'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
let browserify = require('gulp-browserify');

// Default runner
gulp.task('default', ['html','tmpl','css','js']);

gulp.task('html', function() {
    gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('tmpl', function() {
    gulp.src('./templates/*.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('css', function() {
    gulp.src('./css/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  gulp.src('./js/app.js')
  .pipe(babel({
			presets: ['es2015']
		}))
  .pipe(browserify())
  .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch('./css/*.scss', ['css']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./templates/*.html', ['tmpl']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./js/*/*.js', ['js']);
});
