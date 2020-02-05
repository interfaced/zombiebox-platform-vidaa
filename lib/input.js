/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2018-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import AbstractInput from 'zb/device/abstract-input';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import Key from 'zb/device/input/key';


/**
 */
export default class Input extends AbstractInput {
	/**
	 * @override
	 */
	isPointingDeviceSupported() {
		return false;
	}

	/**
	 * @override
	 */
	enablePointingDevice() {
		throw new UnsupportedFeature('Pointing device enabling');
	}

	/**
	 * @override
	 */
	disablePointingDevice() {
		throw new UnsupportedFeature('Pointing device disabling');
	}

	/**
	 * @override
	 */
	_createKeysMap() {
		return {
			37: Key.LEFT,
			38: Key.UP,
			39: Key.RIGHT,
			40: Key.DOWN,

			48: Key.DIGIT_0,
			49: Key.DIGIT_1,
			50: Key.DIGIT_2,
			51: Key.DIGIT_3,
			52: Key.DIGIT_4,
			53: Key.DIGIT_5,
			54: Key.DIGIT_6,
			55: Key.DIGIT_7,
			56: Key.DIGIT_8,
			57: Key.DIGIT_9,

			19: Key.PAUSE,
			415: Key.PLAY,
			413: Key.STOP,

			8: Key.BACK,
			13: Key.ENTER,
			27: Key.EXIT,

			403: Key.RED,
			404: Key.GREEN,
			405: Key.YELLOW,
			406: Key.BLUE,

			427: Key.PAGE_UP,
			428: Key.PAGE_DOWN,

			447: Key.VOLUME_UP,
			448: Key.VOLUME_DOWN
		};
	}
}
