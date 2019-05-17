goog.provide('zb.device.platforms.hisense.Info');
goog.require('zb.device.AbstractInfo');
goog.require('zb.device.Resolution');
goog.require('zb.device.platforms.hisense.consts.MenuLanguageLocaleMap');


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
		// eslint-disable-next-line new-cap
		return window['Hisense_GetBrand']();
	}

	/**
	 * @override
	 */
	model() {
		// eslint-disable-next-line new-cap
		return window['Hisense_GetModelName']();
	}

	/**
	 * @override
	 */
	serialNumber() {
		// eslint-disable-next-line new-cap
		return window['Hisense_GetDeviceID']();
	}

	/**
	 * @override
	 */
	softwareVersion() {
		// eslint-disable-next-line new-cap
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
		// eslint-disable-next-line new-cap
		const menuLanguage = window['Hisense_GetMenuLanguageCode']();
		return zb.device.platforms.hisense.consts.MenuLanguageLocaleMap[menuLanguage] || 'en';
	}
};
