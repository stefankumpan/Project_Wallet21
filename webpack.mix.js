const mix = require('laravel-mix');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/assets/font', 'public/fonts');


// mix.js('resources/js/main.js', 'public/js');



// Update your mix plugins
mix.js('resources/assets/js/main.js', 'public/js').webpackConfig({
  plugins: [
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
  ],
  // Other config goes here
}).version();
mix.sass('resources/assets/sass/app.scss', 'public/css').version();
