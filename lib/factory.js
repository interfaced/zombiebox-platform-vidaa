goog.provide('zb.device.platforms.hisense.factory.createDevice');
goog.require('zb.device.platforms.hisense.Device');


/**
 * @return {?zb.device.platforms.hisense.Device}
 */
zb.device.platforms.hisense.factory.createDevice = () => {
	const isHisensePlatform = zb.device.platforms.hisense.Device.detect();

	if (isHisensePlatform) {
		const videoContainer = app.getVideoContainer();

		return new zb.device.platforms.hisense.Device(videoContainer);
	}

	return null;
};
