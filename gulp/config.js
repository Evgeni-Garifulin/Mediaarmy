// ===============================================
// Gulp paths config
// ===============================================


module.exports = config = {
	src: {
		scss: './app/scss/style.scss',
		css: './app/css/*.css',
		js: './app/js/index.js',
		fonts: './app/fonts/**/*',
		pug: './app/pug/pages/**/*.pug',
		html: './app/*.html',
		img: ['./app/img/**/*.{gif,png,jpg,webp,svg}', '!./app/img/icons/**/*'],
		webp: './app/img/**/*.{tiff,png,jpg,webp}',
		svg: './app/img/icons/**/*',
		libs: './app/libs/**/*',
		favicon: './app/favicon/**/*',
	},
	build: {
		scss: './dist/css/',
		css: './dist/css/',
		js: './dist/js/',
		fonts: './dist/fonts/',
		pug: './dist/',
		html: './dist/',
		img: './dist/img/',
		webp: './dist/img/webp/',
		svg: './dist/img/icons/',
		libs: './dist/libs/',
		favicon: './dist/favicon/',
	},
	watch: {
		scss: './app/scss/**/*',
		css: './app/css/*.css',
		js: './app/js/**/*.js',
		fonts: './app/fonts/**/*',
		img: './app/img/**/*',
		webp: './app/img/**/*',
		svg: './app/img/icons/*.svg',
		pug: './app/pug/**/*.pug',
		html: './app/**/*.html',
		libs: './app/libs/**/*',
		favicon: './app/favicon/**/*',
	},
	clean: './dist/',
};
