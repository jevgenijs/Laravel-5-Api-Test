var elixir = require('laravel-elixir');
require('./gulp/jshint');
require('laravel-elixir-browserify');
require('laravel-elixir-ng-html2js');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.jshint()
       .ngHtml2Js()
       .browserify("app.js");
});
