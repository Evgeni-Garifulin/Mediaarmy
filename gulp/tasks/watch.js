const gulp = require('gulp');

const buildImg = require('./img');
const buildWebp = require('./webp');
const buildSvgSprite = require('./spriteSVG');
const buildScss = require('./scss');
const buildCss = require('./css');
const buildJs = require('./scripts');
const buildFonts = require('./scripts');
const buildPug = require('./pug');
const buildHtml = require('./html');
const buildLibs = require('./libs');
const buildFavicons = require('./favicons');


const config = require('../config');
const browserSyncReload = require('./server').browserSyncReload;


module.exports = watch = (done) => {
	gulp.watch(config.watch.pug, gulp.series(buildPug, browserSyncReload));
	gulp.watch(config.watch.html, gulp.series(buildHtml, browserSyncReload));
	gulp.watch(config.watch.scss, gulp.series(buildScss));
	gulp.watch(config.watch.css, gulp.series(buildCss));
	gulp.watch(config.watch.js, gulp.series(buildJs, browserSyncReload));
	gulp.watch(config.watch.img, gulp.series(buildImg, browserSyncReload));
	gulp.watch(config.watch.webp, gulp.series(buildWebp, browserSyncReload));
	gulp.watch(config.watch.svg, gulp.series(buildSvgSprite, browserSyncReload));
	gulp.watch(config.watch.fonts, gulp.series(buildFonts, browserSyncReload));
	gulp.watch(config.watch.libs, gulp.series(buildLibs, browserSyncReload));
	gulp.watch(config.watch.favicon, gulp.series(buildFavicons, browserSyncReload));
	done();
};
