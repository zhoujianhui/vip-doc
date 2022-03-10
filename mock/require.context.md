https://www.manongdao.com/article-565867.html

 you are using Babel, look at babel-plugin-require-context-hook. Configuration instructions for Storybook are available at Storyshots | Configure Jest to work with Webpack's require.context(), but they are not Storyshots/Storybook specific.

To summarise:

Install the plugin.
```bash
yarn add babel-plugin-require-context-hook --dev
```
Create a file .jest/register-context.js with the following contents:

import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();
Configure Jest (the file depends on where you are storing your Jest configuration, e.g. package.json):

setupFiles: ['<rootDir>/.jest/register-context.js']
Add the plugin to .babelrc

{
  "presets": ["..."],
  "plugins": ["..."],
  "env": {
    "test": {
      "plugins": ["require-context-hook"]
    }
  }
}
Alternatively, add it to babel.config.js:

module.exports = function(api) {
  api.cache(true)

  const presets = [...]
  const plugins = [...]

  if (process.env.ENV_NODE === "test") {    
    plugins.push("require-context-hook")    
  }

  return {
    presets,
    plugins
  }
}