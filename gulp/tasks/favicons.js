const gulp = require('gulp');

const config = require('../config');

module.exports = function buildFavicons() {
	return gulp.src(config.src.favicon).pipe(gulp.dest(config.build.favicon));
};
