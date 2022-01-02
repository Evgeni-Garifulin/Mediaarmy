const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

const browserSyncInstance = require('../utilities/getBrowserSyncInstance');

const config = require('../config');
const projectConfig = require('../utilities/getConfig')();

module.exports = function buildScss() {
    return gulp
        .src(config.src.scss)
        .pipe(plumber())
        .pipe(gulpif(projectConfig.scssSourcemaps, sourcemaps.init()))
        .pipe(
            sass(
                gulpif(projectConfig.scssUglify, { outputStyle: 'compressed' })
            ).on('error', sass.logError)
        )
        .pipe(
            gulpif(
                projectConfig.scssAutoprefixer,
                autoprefixer({
                    overrideBrowserslist: ['last 2 version'],
                    cascade: false,
                })
            )
        )
        .pipe(
            gulpif(
                projectConfig.scssCleanScss,
                cleancss({ level: { 1: { specialComments: 0 } } })
            )
        )
        .pipe(gulpif(projectConfig.scssSourcemaps, sourcemaps.write()))
        .pipe(gulp.dest(config.build.scss))
        .pipe(browserSyncInstance.reload({ stream: true }));
};
