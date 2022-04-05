// Nuxt config
export default {

	// Load boilerplate
	buildModules: [
		'@cloak-app/boilerplate/nuxt',
		'@cloak-app/demo-theme/nuxt',
	],

	// Set boilerplate settings
	cloak: {
		boilerplate: {
			siteName: '@cloak-app/sandbox'
		}
	}
}
