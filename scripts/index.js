'use strict'

const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
const procon = require('./pro-con')

hexo.extend.renderer.register('pcss', 'css', (data) => {
    return postcssrc()
        .then(({ plugins, options }) => postcss(plugins).process(data.text, options))
        .then((result) => result.css)
}, true)

hexo.extend.tag.register("procon", procon, {ends: true})
