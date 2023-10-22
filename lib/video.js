/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2018-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import HTML5Video from 'zb/device/common/HTML5-video';


/**
 */
export default class Video extends HTML5Video {
	/**
	 * @override
	 */
	_removeVideoObject() {
		// Vidaa vendor recommended video destroy method, prevent bug previous video last frame shown
		this._video.removeChild(this._video.firstChild);
		this._video.load();

		super._removeVideoObject();
	}
}
