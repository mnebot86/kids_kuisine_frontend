import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		projectId: '3gt71s',
		baseUrl: 'http://localhost:3005',
		setupNodeEvents(on, config) {
			config.baseUrl = process.env.BASE_URL || 'http://localhost:3000';

			return config;
		},
	},
});
