const path = require('path');
const {AbstractPlatform} = require('zombiebox');


/**
 */
class Vidaa extends AbstractPlatform {
	/**
	 * @override
	 */
	getName() {
		return 'vidaa';
	}

	/**
	 * @override
	 */
	getSourcesDir() {
		return path.join(__dirname, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		return {};
	}

	/**
	 * @override
	 */
	pack(zbApp, distDir) {
		// Do nothing, index.html is good enough as Vidaa artifact
	}
}


/**
 */
module.exports = Vidaa;
