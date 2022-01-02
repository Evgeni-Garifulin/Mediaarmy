const gulp = require('gulp');

const config = require('../config');

module.exports = function buildFonts() {
    return gulp
        .src(config.src.libs)
        .pipe(gulp.dest(config.build.libs));
};
