/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2018-2020, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Device from './device';


/**
 * @return {?Device}
 */
export default function create() {
	const isVidaaPlatform = Device.detect();

	if (isVidaaPlatform) {
		return new Device();
	}

	return null;
}
