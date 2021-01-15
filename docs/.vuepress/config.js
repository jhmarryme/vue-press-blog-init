const pluginsConf = require("./config/pluginsConf")
const nav = require("./nav")
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: pluginsConf,
  themeConfig: {
    logo: '/assets/img/hero.png',
    nav: nav,
  },
}
