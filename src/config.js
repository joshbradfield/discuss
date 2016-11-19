require('babel-polyfill');

// The below will not work with Karma, unless you let it see the root dir...
// const pjson = require('../package.json');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

// Fetch from package.json
module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'discussting',
    description: 'A platform for online discussion',
    repository: 'https://github.com/joshbradfield/discuss',
    head: {
      titleTemplate: 'discuss: %s',
      meta: [
        {name: 'description', content: 'proto'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'discussting'},
        {property: 'og:image', content: 'https://ff-discuss.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'discuss'},
        {property: 'og:description', content: 'A platform for online discussion'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@joshbradfield'},
        {property: 'og:creator', content: '@joshbradfield'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
