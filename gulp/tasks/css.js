const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const gulpif = require('gulp-if');

const browserSyncInstance = require('../utilities/getBrowserSyncInstance');

const config = require('../config');
const projectConfig = require('../utilities/getConfig')();

module.exports = function buildCss () {
	return gulp
        .src(config.src.css)
        .pipe(gulpif(projectConfig.cssMinify, cleancss()))
        .pipe(gulp.dest(config.build.css))
        .pipe(browserSyncInstance.reload({ stream: true }));
};
