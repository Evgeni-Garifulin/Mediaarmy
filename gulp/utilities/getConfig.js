// ===============================================
// Gulp tusk for choosing environment config
// ===============================================


module.exports = function getConfig () {
	let env = process.env.NODE_ENV || 'development';
		try {
				return require(`../tasks/configs/${env}.config`);
		} catch {
			console.error(
                `Did not found config file for environment ${env}.config`
            );
				return{};
		}
};
