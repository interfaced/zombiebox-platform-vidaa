goog.provide('zb.device.platforms.hisense.Video');
goog.require('zb.device.platforms.common.HTML5Video');
goog.require('zb.html');


/**
 */
zb.device.platforms.hisense.Video = class extends zb.device.platforms.common.HTML5Video {
	/**
	 * @override
	 */
	_removeVideoObject() {
		// Hisense vendor recommended video destroy method, prevent bug previous video last frame shown
		this._video.children[0] = zb.html.node('div');
		this._video.load();

		super._removeVideoObject();
	}
};
