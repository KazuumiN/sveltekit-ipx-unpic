import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ipxServer from './ipxServer';
import type { Plugin, ViteDevServer } from 'vite';

const ipxPlugin: Plugin = {
	name: "ipx",
	apply: "serve",  // 開発時のみ有効
	configureServer(server: ViteDevServer) {
		server.middlewares.use((req, res, next) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (req.url.startsWith('/_ipx')) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				req.url = req.url.replace('/_ipx', '');
				return ipxServer(req, res);
			}
			next();
		})
	},
}

export default defineConfig({
	plugins: [
		sveltekit(),
		ipxPlugin
	]
});
