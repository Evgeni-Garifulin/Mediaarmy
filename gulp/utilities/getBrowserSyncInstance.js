const browserSync = require('browser-sync');

module.exports = browserSyncInstance = browserSync.has('server') ?
    browserSync.get('server') :
    browserSync.create('server');
