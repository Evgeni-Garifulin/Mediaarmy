const browserSyncInstance = require('../utilities/getBrowserSyncInstance');
const browserSyncConfig = require('../serverConfig');

const browserSyncServer = () => browserSyncInstance.init(browserSyncConfig);

const browserSyncReload = (done) => {
	browserSyncInstance.reload();
	done();
};

module.exports = {
	browserSyncServer,
	browserSyncReload
}
