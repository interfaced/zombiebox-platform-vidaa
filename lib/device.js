goog.provide('zb.device.platforms.hisense.Device');
goog.require('zb.device.AbstractDevice');
goog.require('zb.device.errors.UnsupportedFeature');
goog.require('zb.device.platforms.common.LocalStorage');
goog.require('zb.device.platforms.hisense.Info');
goog.require('zb.device.platforms.hisense.Input');
goog.require('zb.device.platforms.hisense.Video');
goog.require('zb.http');


/**
 */
zb.device.platforms.hisense.Device = class extends zb.device.AbstractDevice {
	/**
	 * @param {HTMLElement} videoContainer
	 */
	constructor(videoContainer) {
		super();

		/**
		 * @type {zb.device.platforms.hisense.Info}
		 */
		this.info;

		/**
		 * @type {zb.device.platforms.common.LocalStorage}
		 */
		this.storage;

		/**
		 * @type {zb.device.platforms.hisense.Input}
		 */
		this.input;

		/**
		 * @type {HTMLElement}
		 * @protected
		 */
		this._videoContainer = videoContainer;
	}

	/**
	 * @override
	 */
	init() {
		this.info = new zb.device.platforms.hisense.Info();
		this.input = new zb.device.platforms.hisense.Input();
		this.storage = new zb.device.platforms.common.LocalStorage();
		this._fireEvent(this.EVENT_READY);
	}

	/**
	 * @override
	 */
	createVideo() {
		return new zb.device.platforms.hisense.Video(this._videoContainer);
	}

	/**
	 * @override
	 */
	exit() {
		window.close();
	}

	/**
	 * @override
	 */
	getMAC() {
		throw new zb.device.errors.UnsupportedFeature('MAC address getting');
	}

	/**
	 * @override
	 */
	getIP() {
		throw new zb.device.errors.UnsupportedFeature('IP address getting');
	}

	/**
	 * @override
	 */
	setOSDOpacity(value) {
		throw new zb.device.errors.UnsupportedFeature('OSD opacity setting');
	}

	/**
	 * @override
	 */
	getOSDOpacity() {
		throw new zb.device.errors.UnsupportedFeature('OSD opacity getting');
	}

	/**
	 * @override
	 */
	setOSDChromaKey(chromaKey) {
		throw new zb.device.errors.UnsupportedFeature('OSD chroma key setting');
	}

	/**
	 * @override
	 */
	getOSDChromaKey() {
		throw new zb.device.errors.UnsupportedFeature('OSD chroma key getting');
	}

	/**
	 * @override
	 */
	removeOSDChromaKey() {
		throw new zb.device.errors.UnsupportedFeature('OSD chroma key removing');
	}

	/**
	 * @override
	 */
	getLaunchParams() {
		return zb.http.decodeParams(window.location.search.substring(1));
	}

	/**
	 * @override
	 */
	getEnvironment() {
		throw new zb.device.errors.UnsupportedFeature('Environment getting');
	}

	/**
	 * @override
	 */
	hasOSDOpacityFeature() {
		return false;
	}

	/**
	 * @override
	 */
	hasOSDAlphaBlendingFeature() {
		return true;
	}

	/**
	 * @override
	 */
	hasOSDChromaKeyFeature() {
		return false;
	}

	/**
	 * @override
	 */
	isUHDSupported() {
		// eslint-disable-next-line new-cap
		return window['Hisense_Get4KSupportState']();
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return typeof window['Hisense_GetDeviceID'] !== 'undefined';
	}
};
