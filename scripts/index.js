'use strict'

const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

hexo.extend.renderer.register('scss', 'css', (data) => {
    return postcssrc()
        .then(({ plugins, options }) => postcss(plugins).process(data.text, options))
        .then((result) => result.css)
}, true)
