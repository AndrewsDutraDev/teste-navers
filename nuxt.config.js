export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "teste_navers",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: "description", name: "description", content: "" }
		],
		script:[
			{ src: '/js/jquery.min.js', type: "text/javascript", body: true },
            { src: '/js/bootstrap.min.js', type: "text/javascript", body: true },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/bootstrap/css/bootstrap.min.css", "~/assets/css/style.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: "~/plugins/vee-validate.js", ssr: true },
		{src: `~/plugins/axios.js`, ssr: true},	
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		"@nuxtjs/dotenv",
		"nuxt-webfontloader"
	],
	webfontloader: {
		custom: {
			families: ["Montserrat"],
			urls: [
				"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
			]
		}
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseUrl: process.env.apiBaseUrl
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ["vee-validate"]
	}
};
