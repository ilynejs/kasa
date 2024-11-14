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
			'@assets': path.resolve(__dirname, './src/assets'),

			'@abstracts': path.resolve(
				__dirname,
				'./src/assets/styles/abstracts'
			),

			'@components': path.resolve(__dirname, './src/components'),

			'@data': path.resolve(__dirname, './src/data'),
		},
	},
});
