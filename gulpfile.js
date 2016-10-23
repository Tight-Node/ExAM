(function() {
    'use strict';

    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass');

    // --- Basic Tasks ---
    gulp.task('css', function() {
        return gulp.src('./public/stylesheets/sass/*.scss')
            .pipe(
                sass({
                    includePaths: ['./public/stylesheets/'],
                    errLogToConsole: true,
                    outputStyle: 'compressed'
                }))
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./public/stylesheets/'));
    });

    gulp.task('js', function() {
        return gulp.src('./src/*.js')
            .pipe(concat('all.min.js'))
            .pipe(uglify({
                mangle: false
            }))
            .pipe(gulp.dest('./public/javascripts/dist/'));
    });

    gulp.task('watch', function() {
        gulp.watch('./public/stylesheets/sass/*.scss', ['css']);
        // gulp.watch('./src/*.js', ['js']);
    });

    // gulp.task('default', ['css', 'js', 'watch']);
    // gulp.task('build', ['css', 'js']);
}());
