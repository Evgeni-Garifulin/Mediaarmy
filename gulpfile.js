// ===============================================
// Main gulp file
// ===============================================


const gulp = require('gulp');

const watch = require('./gulp/tasks/watch');
const browserSync = require('./gulp/tasks/server').browserSyncServer;

const buildCss = require('./gulp/tasks/css');
const buildScss = require('./gulp/tasks/scss');
const buildJs = require('./gulp/tasks/scripts');
const buildFonts = require('./gulp/tasks/fonts');
const buildImg = require('./gulp/tasks/img');
const buildWebp = require('./gulp/tasks/webp');
const buildSvgSprite = require('./gulp/tasks/spriteSVG');
const buildLibs = require('./gulp/tasks/libs');
const buildFavicons = require('./gulp/tasks/favicons');
const buildHtml = require('./gulp/tasks/html');
const buildPug = require('./gulp/tasks/pug');
const clean = require('./gulp/tasks/clean');

exports.build = build = gulp.parallel(
    buildHtml,
    buildPug,
    buildScss,
    buildCss,
    buildJs,
    buildImg,
    buildWebp,
    buildSvgSprite,
    buildLibs,
    buildFavicons,
    buildFonts,
);
exports.default = gulp.series(clean, build, gulp.parallel(browserSync, watch));
