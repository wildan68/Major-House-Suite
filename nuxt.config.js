module.exports = {
    /*
     ** Headers of the page
     */
    modules: [
        '@nuxtjs/proxy',
    ],
    head: {
        title: 'mhsuites',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Major Home Suites' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/main.css' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    plugins: [
        { src: './plugins/swiper.js', ssr: false },
        { src: './plugins/config.js' },
        { src: './plugins/toast.js', ssr: false },
        { src: './plugins/cloudinary.js', ssr: false },
        { src: './plugins/vue-filter.js', ssr: false }
    ],
    css: ['swiper/swiper-bundle.min.css'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        //extractCSS: true,
        /*optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }*/
        extractCSS: {
            allChunks: true
        },
    }
}