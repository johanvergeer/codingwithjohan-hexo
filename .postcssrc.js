const tailwindrc = require("./tailwind.config")

module.exports = {
    from: undefined,
    plugins: {
        'postcss-import': {},
        'tailwindcss': tailwindrc,
        'autoprefixer': {},
        'cssnano': {
            preset: 'default'
        }
    }
};