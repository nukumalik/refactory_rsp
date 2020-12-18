const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    components: 'src/components',
    config: 'src/config',
    layouts: 'src/layouts',
    pages: 'src/pages',
    static: 'src/static',
    store: 'src/store',
    utils: 'src/utils',
  })(config)

  return config
}
