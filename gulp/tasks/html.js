const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');

const config = require('../config');


module.exports = function buildHtml() {
    return gulp.src(config.src.html)
        .pipe(htmlValidator())
        .pipe(gulp.dest(config.build.html));
};
