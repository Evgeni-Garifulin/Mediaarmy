const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');

const config = require('../config');
const projectConfig = require('../utilities/getConfig')();

module.exports = function buildImg() {
    return gulp.src(config.src.img)
        .pipe(gulpif(projectConfig.imagemin,
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({
                    quality: 75,
                    progressive: true,
                }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ])
        ))
        .pipe(gulp.dest(config.build.img));
};
