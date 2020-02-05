const copyrightHeader = [
	'',
	' * This file is part of the ZombieBox package.',
	' *',
	` * Copyright © 2018-${(new Date).getFullYear()}, Interfaced`,
	' *',
	' * For the full copyright and license information, please view the LICENSE',
	' * file that was distributed with this source code.',
	' '
];

module.exports = {
	extends: 'interfaced',
	plugins: ['header'],
	overrides: [
		{
			files: ['lib/**/*.js'],
			extends: 'interfaced/esm',
			settings: {
				'import/resolver': 'zombiebox',
			},
			rules: {
				'header/header': ['error', 'block', copyrightHeader],
				'new-cap': 'off' // Most of Hisesnse APIs are in uppecase
			}
		},
		{
			files: ['index.js'],
			extends: 'interfaced/node'
		},
	]
};
