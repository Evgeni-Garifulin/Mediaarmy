const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

const config = require('../config');
const projectConfig = require('../utilities/getConfig')();
const webpackConfig = require('../../webpack.config');

const browserSyncInstance = require('../utilities/getBrowserSyncInstance');

module.exports = function buildJs() {
    return gulp
        .src(config.src.js)
        .pipe(
            gulpif(
                projectConfig.scriptsSourceMaps,
                sourcemaps.init({
                    loadMaps: true,
                })
            )
        )
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(projectConfig.scriptsSourceMaps, sourcemaps.write()))
        .pipe(gulpif(projectConfig.scriptsUglify, uglify()))
        .pipe(gulp.dest(config.build.js))
        .pipe(browserSyncInstance.reload({ stream: true }));
};
