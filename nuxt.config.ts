import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	app: {
		// pageTransition: { name: "layout", mode: "out-in" },
		head: {
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
				},
				/*{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
				},*/
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Rakkas&family=Sarina&display=swap",
				},
				{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			],
		},
	},
	build: {
		transpile: ["vuetify"],
	},
	css: ["~/assets/styles/style.scss"],
	modules: [
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"@vite-pwa/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxtjs/device",
		'vue3-carousel-nuxt',
        '@nuxtseo/module',
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		//...
	],
	carousel: {
		prefix: 'C'
	},
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	devtools: { enabled: true },
});
