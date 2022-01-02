const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const gulpif = require('gulp-if');
const flatten = require('gulp-flatten');

const config = require('../config');
const projectConfig = require('../utilities/getConfig')();

module.exports = function buildPug() {
    return gulp
        .src(config.src.pug)
        .pipe(plumber())
        .pipe(pug(gulpif(projectConfig.pugPrettify, { pretty: true })))
        .pipe(flatten())
        .pipe(htmlValidator())
        .pipe(gulp.dest(config.build.pug));
};
