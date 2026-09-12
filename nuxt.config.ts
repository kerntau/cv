import process from 'node:process'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'zh',
			},
			link: [
				{ rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				// "InterVariable", "Inter", "InterDisplay"
				{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css', media: 'print', onload: 'this.media="all"' },
			],
		},
		rootAttrs: {
			id: 'chent-cv',
		},
	},

	css: [
		'~/assets/main.scss',
	],

	compatibilityDate: '2025-03-11',

	experimental: {
		typescriptPlugin: true,
	},

	features: {
		inlineStyles: false,
	},

	runtimeConfig: {
		public: {
			// 从 .env 文件中读取的变量
			name: process.env.NAME,
			phone: process.env.PHONE,
		},
	},

	vite: {
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
			],
		},
		server: {
			// 预先允许从其他域名访问开发环境，但 --host 才会在所有网络接口上启动监听
			allowedHosts: true,
		},
	},

	// @keep-sorted
	modules: [
		'@nuxt/icon',
		'@unocss/nuxt',
	],

	icon: {
		// 默认是 CSS Mask 模式，在低级 PDF 阅读器中可能无法正常显示
		mode: 'svg',
	},
})
