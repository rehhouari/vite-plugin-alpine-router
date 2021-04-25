import type { Plugin } from 'vite';

type PluginConfig = {};

export default (config: PluginConfig = {}): Plugin => {
	return {
		name: 'vite:alpine-router',
		handleHotUpdate({ file, server }) {
			let parts = file.split('/');
			let dir = parts[parts.length - 2];
			if (dir == 'views') {
				server.ws.send({
					type: 'full-reload',
				});
			}
			return [];
		},
	};
};
