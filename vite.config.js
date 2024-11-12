import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // Utilise l'API moderne de Sass pour de meilleures performances
				// charset: false, // Évite les avertissements de charset
				// sassOptions: {

				// 	outputStyle: 'compressed', // Optimise la sortie CSS
				// },
			},
		},
	},
});
