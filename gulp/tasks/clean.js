const del = require('del');

const config = require('../config');


module.exports = function cleandist() {
    return del(config.clean, { force: true });
};
