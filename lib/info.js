goog.provide('zb.device.platforms.hisense.Info');
goog.require('zb.device.AbstractInfo');
goog.require('zb.device.Resolution');
goog.require('zb.device.errors.UnsupportedFeature');


/**
 */
zb.device.platforms.hisense.Info = class extends zb.device.AbstractInfo {
	/**
	 * @override
	 */
	type() {
		return 'hisense';
	}

	/**
	 * @override
	 */
	version() {
		return navigator.appVersion;
	}

	/**
	 * @override
	 */
	manufacturer() {
		return window['Hisense_GetBrand']();
	}

	/**
	 * @override
	 */
	model() {
		return window['Hisense_GetModelName']();
	}

	/**
	 * @override
	 */
	serialNumber() {
		return window['Hisense_GetDeviceID']();
	}

	/**
	 * @override
	 */
	softwareVersion() {
		return window['Hisense_GetFirmWareVersion']();
	}

	/**
	 * @override
	 */
	hardwareVersion() {
		return navigator.platform;
	}

	/**
	 * @override
	 */
	osdResolutionType() {
		const resolutions = this._getResolutionsByScreenSize(window.innerWidth, window.innerHeight);

		return resolutions[0] || zb.device.Resolution.HD;
	}

	/**
	 * @override
	 */
	_getLocale() {
		return window['Hisense_GetCountryCode']();
	}
};
