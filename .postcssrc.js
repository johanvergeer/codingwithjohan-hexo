const tailwindrc = require("./tailwind.config")

module.exports = {
    from: 'themes/cwj-theme/source/css/main.pcss',
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'tailwindcss': tailwindrc,
        'autoprefixer': {},
        'cssnano': {
            preset: 'default'
        }
    }
};
