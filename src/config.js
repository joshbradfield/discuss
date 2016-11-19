require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'discuss',
    description: 'Discuss app',
    head: {
      titleTemplate: 'discuss: %s',
      meta: [
        {name: 'description', content: 'discuss online'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'disucss'},
        {property: 'og:image', content: 'https://ff-discuss.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'discuss'},
        {property: 'og:description', content: 'discuss online'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@joshbradfield'},
        {property: 'og:creator', content: '@joshbradfield'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
