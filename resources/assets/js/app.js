require('angular');
require('./controllers/commentCtrl');
require('./services/commentService');

var commentApp = angular.module('commentApp', ['commentCtrl', 'commentService']);
