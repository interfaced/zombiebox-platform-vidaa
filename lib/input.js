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
			38: Key.UP,
			39: Key.RIGHT,
			40: Key.DOWN,
			37: Key.LEFT,
			13: Key.ENTER,
			8: Key.BACK,
			406: Key.BLUE,
			403: Key.RED,
			404: Key.GREEN,
			405: Key.YELLOW,
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
			415: Key.PLAY,
			19: Key.PAUSE,
			463: Key.PLAY_PAUSE,
			413: Key.STOP,
			417: Key.FWD,
			412: Key.REW,
			427: Key.PAGE_UP,
			428: Key.PAGE_DOWN
		};
	}
}
