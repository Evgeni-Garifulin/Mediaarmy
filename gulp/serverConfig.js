
const middleware = (req, res, next) => {
	res.setHeader('Cache-control', 'no-store no-cache');
	next();
}

module.exports = browserSyncConfig = {
    server: {
        baseDir: './dist',
    },
    port: 3000,
    notify: false,
    middleware,
}
