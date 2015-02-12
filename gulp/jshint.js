'use strict';

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    elixir = require('laravel-elixir');
var Notification = require('laravel-elixir/ingredients/commands/Notification');

elixir.extend('jshint', function (src, options) {
  src = src || [
    'resources/assets/js/**/*.js',
  ];

  options = options || {};

  var onError = function (err) {
    new Notification().error(err, 'JsHint Compilation Failed!');
    this.emit('end');
  };

  gulp.task('jshint', function () {
    return gulp.src(src)
      .pipe(jshint(options))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
      .on('error', onError);
  });

  this.registerWatcher('jshint', src);

  return this.queueTask('jshint');
});
