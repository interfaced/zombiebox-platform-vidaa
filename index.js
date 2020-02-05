const path = require('path');
const {AbstractPlatform} = require('zombiebox');


/**
 */
class Hisense extends AbstractPlatform {
	/**
	 * @override
	 */
	getName() {
		return 'hisense';
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
		// Do nothing, index.html is good enough as Hisense artifact
	}
}


/**
 */
module.exports = Hisense;
