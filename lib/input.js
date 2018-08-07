goog.provide('zb.device.platforms.hisense.Input');
goog.require('zb.device.AbstractInput');
goog.require('zb.device.errors.UnsupportedFeature');
goog.require('zb.device.input.Keys');


/**
 */
zb.device.platforms.hisense.Input = class extends zb.device.AbstractInput {
	/**
	 * @override
	 */
	isPointingDeviceSupported() {
		return true;
	}

	/**
	 * @override
	 */
	enablePointingDevice() {
		throw new zb.device.errors.UnsupportedFeature('Pointing device enabling');
	}

	/**
	 * @override
	 */
	disablePointingDevice() {
		throw new zb.device.errors.UnsupportedFeature('Pointing device disabling');
	}

	/**
	 * @override
	 */
	_createKeysMap() {
		const keys = zb.device.input.Keys;
		const map = {};

		map[37] = keys.LEFT;
		map[38] = keys.UP;
		map[39] = keys.RIGHT;
		map[40] = keys.DOWN;

		map[48] = keys.DIGIT_0;
		map[49] = keys.DIGIT_1;
		map[50] = keys.DIGIT_2;
		map[51] = keys.DIGIT_3;
		map[52] = keys.DIGIT_4;
		map[53] = keys.DIGIT_5;
		map[54] = keys.DIGIT_6;
		map[55] = keys.DIGIT_7;
		map[56] = keys.DIGIT_8;
		map[57] = keys.DIGIT_9;

		map[19] = keys.PAUSE; // "Pause"
		map[415] = keys.PLAY; // "Pause"
		map[413] = keys.STOP; // "Pause"

		map[8] = keys.BACK;
		map[13] = keys.ENTER;

		map[403] = keys.RED; // "F1"
		map[404] = keys.GREEN; // "F2"
		map[405] = keys.YELLOW; // "F3"
		map[406] = keys.BLUE;

		map[33] = keys.PAGE_UP;
		map[34] = keys.PAGE_DOWN;

		return map;
	}
};