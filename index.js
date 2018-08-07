const path = require('path');


/**
 * @implements {ZBPlatform}
 */
class PlatformHisense {
	/**
	 * @override
	 */
	getName() {
		return 'hisense';
	}

	/**
	 * @override
	 */
	getPublicDir() {
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
	buildApp(zbApp, distDir) {
		const buildHelper = zbApp.getBuildHelper();

		return buildHelper.writeIndexHtml(path.join(distDir, 'index.html'), this.getName())
			.then((warnings) => {
				buildHelper.copyCustomWebFiles(distDir);

				return warnings;
			});
	}
}


/**
 * @param {ZBApplication} zb
 */
module.exports = PlatformHisense;