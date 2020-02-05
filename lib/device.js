/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2018-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Rect from 'zb/geometry/rect';
import AbstractDevice from 'zb/device/abstract-device';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import LocalStorage from 'zb/device/common/local-storage';
import StatefulHtml5Video from 'zb/device/common/stateful-html5-video';
import {Resolution, ResolutionInfo} from 'zb/device/resolutions';
import {decodeParams} from 'zb/http/http';
import Info from './info';
import Input from './input';
import Video from './video';


/**
 */
export default class Device extends AbstractDevice {
	/**
	 */
	constructor() {
		super();

		/**
		 * @type {Info}
		 */
		this.info;

		/**
		 * @type {LocalStorage}
		 */
		this.storage;

		/**
		 * @type {Input}
		 */
		this.input;
	}

	/**
	 * @override
	 */
	init() {
		this.info = new Info();
		this.input = new Input();
		this.storage = new LocalStorage();
		this._fireEvent(this.EVENT_READY);
	}

	/**
	 * @override
	 * @param {Rect} rect
	 * @return {Video}
	 */
	createVideo(rect) {
		return new Video(rect);
	}

	/**
	 * @override
	 */
	createStatefulVideo() {
		const panelResolutionInfo = ResolutionInfo[this.info.getPanelResolution() || Resolution.HD];
		const appResolutionInfo = ResolutionInfo[this.info.getOSDResolution() || Resolution.HD];

		return new StatefulHtml5Video(
			panelResolutionInfo,
			appResolutionInfo
		);
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
		throw new UnsupportedFeature('MAC address getting');
	}

	/**
	 * @override
	 */
	getIP() {
		throw new UnsupportedFeature('IP address getting');
	}

	/**
	 * @override
	 */
	setOSDOpacity(value) {
		throw new UnsupportedFeature('OSD opacity setting');
	}

	/**
	 * @override
	 */
	getOSDOpacity() {
		throw new UnsupportedFeature('OSD opacity getting');
	}

	/**
	 * @override
	 */
	setOSDChromaKey(chromaKey) {
		throw new UnsupportedFeature('OSD chroma key setting');
	}

	/**
	 * @override
	 */
	getOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key getting');
	}

	/**
	 * @override
	 */
	removeOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key removing');
	}

	/**
	 * @override
	 */
	getLaunchParams() {
		return decodeParams(window.location.search.substring(1));
	}

	/**
	 * @override
	 */
	getEnvironment() {
		throw new UnsupportedFeature('Environment getting');
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
		return window['Hisense_Get4KSupportState']();
	}

	/**
	 * @override
	 */
	isUHD8KSupported() {
		return false;
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return typeof window['Hisense_GetDeviceID'] !== 'undefined';
	}
}
