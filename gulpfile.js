'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpCopy = require('gulp-copy');

var sourceFiles = [ '/src/*', '/src/*.html'];
var destination = 'dest/';

gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: "./dest",
        proxy: "yourlocal.dev"
      }
    });
});

gulp.task('build', function(){
  return gulp
      .src(sourceFiles)
      .pipe(gulpCopy('./src/'))
      .pipe(gulp.dest('./dest'));
});

gulp.task('default',['build', 'browser-sync'], function () {
});
