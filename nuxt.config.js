// Nuxt config
export default {

	// Load boilerplate
	buildModules: [
		'@cloak-app/boilerplate/nuxt',
		'@cloak-app/demo-theme/nuxt',
		// '@nuxtjs/pwa',
	],

	// Set boilerplate settings
	cloak: {
		boilerplate: {
			siteName: 'Testing'
		}
	}
}
