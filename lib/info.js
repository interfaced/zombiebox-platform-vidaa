/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2018-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import AbstractInfo from 'zb/device/abstract-info';
import {findLargest, Resolution} from 'zb/device/resolutions';
import Rect from 'zb/geometry/rect';
import MenuLanguageLocaleMap from './consts/country-code-locale-map';


/**
 */
export default class Info extends AbstractInfo {
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
	getPanelResolution() {
		return this.getOSDResolution();
	}

	/**
	 * @override
	 */
	getOSDResolution() {
		return findLargest(new Rect({
			x0: 0,
			y0: 0,
			x1: window.innerWidth,
			y1: window.innerHeight
		})) || Resolution.HD;
	}

	/**
	 * @override
	 */
	_getLocale() {
		let lang = '';

		if (typeof window['Hisense_GetMenuLanguageCode'] === 'function') {
			const menuLanguage = window['Hisense_GetMenuLanguageCode']();
			lang = MenuLanguageLocaleMap[menuLanguage];
		}

		if (!lang) {
			lang = window.navigator.language;
		}

		return lang || 'en';
	}
}
