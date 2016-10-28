(function() {
    'use strict';

    var gulp = require('gulp'),
        clean = require('gulp-clean'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        jsdoc = require('gulp-jsdoc3'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass');

    gulp.task('clean', function() {
        return gulp.src('./docs', {
            read: false
        }).pipe(clean({
            force: true
        }));
    });

    // --- Basic Tasks ---
    gulp.task('css', function() {
        return gulp.src('./public/stylesheets/sass/*.scss')
            .pipe(sass({
                includePaths: ['./public/stylesheets/'],
                errLogToConsole: true,
                outputStyle: 'compressed'
            }))
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./public/stylesheets/'));
    });

    gulp.task('hint', function() {
        return gulp.src(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('doc', function(cb) {
        let config = require('./jsdoc-conf');
        gulp.src(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'], {
                read: false
            })
            .pipe(jsdoc(config, cb));
    });

    gulp.task('watch', function() {
        gulp.watch('./public/stylesheets/*.scss', ['css']);
        gulp.watch(['./libs/*.js', './models/*.js', './models/DAO/*.js', './routes/*.js'], ['hint']);
    });
}());
