import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},

	resolve: {
		alias: {
			'@abstracts': path.resolve(
				__dirname,
				'./src/assets/styles/abstracts'
			),
			// '@colors': path.resolve(
			// 	__dirname,
			// 	'./src/assets/styles/abstracts/colors'
			// ),
		},
	},
});
