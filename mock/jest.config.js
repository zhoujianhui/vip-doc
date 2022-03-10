module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [], // jest can load module form node_modules
  setupFiles: ['<rootDir>/.jest/register-context.js']
}
