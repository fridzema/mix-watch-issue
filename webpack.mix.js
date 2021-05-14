const mix = require('laravel-mix');

const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(webpack => {
  return {
    plugins: [
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: [
            'php artisan ziggy:generate ./resources/js/ziggy.js'
          ],
          blocking: true,
          parallel: false
        },
      })
    ]
  };
}).alias({
  ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
});

mix.js('resources/js/test.js', 'public/js');

mix.js('resources/js/app.js', 'public/js').vue({
  version: 2,
  extractStyles: true
});

mix.postCss('resources/css/app.css', 'public/css', [
  //
]);

mix.combine([
  'public/js/app.js',
  'public/js/test.js'
], 'public/js/dist.js');