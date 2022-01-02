const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgMinify = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const beautify = require('gulp-html-beautify');

const config = require('../config');

module.exports = function spriteSVG() {
    return gulp
        .src(config.src.svg)
        .pipe(
            svgMinify({
                js2svg: {
                    pretty: true,
                },
            })
        )
        .pipe(
            cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                    $('[xmlns]').removeAttr('xmlns');
                },
                parserOptions: { xmlMode: true },
            })
        )
        .pipe(replace('&gt;', '>'))
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: '../../svg/icons.svg',
                    },
                },
            })
        )
		.pipe(beautify({
			'indent_with_tabs': true,
		}))
        .pipe(gulp.dest(config.build.svg));
};
