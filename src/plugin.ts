import type { Plugin } from 'vite';

type PluginConfig = {};

export default (config: PluginConfig = {}): Plugin => {
	return {
		name: 'vite:alpine-router',
		handleHotUpdate({ file }) {
			console.log(file);
			return [];
		},
	};
};
