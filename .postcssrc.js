const tailwindrc = require("./tailwind.config")

module.exports = {
    from: undefined,
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