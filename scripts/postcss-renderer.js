'use strict'

const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

module.exports = (data) => {
    return postcssrc()
        .then(({ plugins, options }) => postcss(plugins).process(data.text, options))
        .then((result) => result.css)
}
