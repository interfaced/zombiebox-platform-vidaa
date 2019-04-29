goog.provide('zb.device.platforms.hisense.Video');
goog.require('zb.device.platforms.common.HTML5Video');


/**
 */
zb.device.platforms.hisense.Video = class extends zb.device.platforms.common.HTML5Video {
	/**
	 * @override
	 */
	_removeVideoObject() {
		this._video.children[0] = null;
		this._video.load();

		super._removeVideoObject();
	}
};
