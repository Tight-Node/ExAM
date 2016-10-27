(function() {
    'use strict';

    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        jsdoc = require('gulp-jsdoc3'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass');

    // --- Basic Tasks ---
    gulp.task('css', function() {
        return gulp.src('./public/stylesheets/*.scss')
            .pipe(
                sass({
                    includePaths: ['./public/stylesheets/'],
                    errLogToConsole: true,
                    outputStyle: 'compressed'
                }))
            .pipe(concat('app.scss'))
            .pipe(gulp.dest('./public/stylesheets/'));
    });

    gulp.task('hint', function() {
        return gulp.src(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('doc', function(cb) {
        gulp.src(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'], {
                read: false
            })
            .pipe(jsdoc(cb));
    });

    gulp.task('watch', function() {
        gulp.watch('./public/stylesheets/*.scss', ['css']);
        gulp.watch(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'], ['doc']);
        gulp.watch(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'], ['hint']);
    });
}());
