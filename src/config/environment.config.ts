import { ListenOptions } from '../deps.ts';

export const environmentConfig: { [key: string]: ListenOptions } = {
	default: {
		hostname: 'localhost',
		port: 8000,
	},
	local: {
		hostname: 'localhost',
		port: 8000,
	},
	dev: {
		port: 8000,
	},
};
