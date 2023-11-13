const path = require('path');

module.exports = async ({ config, mode }) => {
  // Add your custom webpack configurations here

  // Resolve the 'styles' alias to the actual path in your project
  config.resolve.alias['@styles'] = path.resolve(__dirname, '../styles');

  return config;
};