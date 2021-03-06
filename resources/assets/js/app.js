require('angular/angular.min');
require('angular-resource/angular-resource.min');
require('angular-route/angular-route.min');
require('./controllers/CommentsController');
require('./partials');

var commentApp = angular.module('commentApp', ['ngResource', 'ngRoute', 'partialsModule', 'commentApp.CommentsController']);

commentApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'welcome.html',
          controller: 'CommentsController'
        })
        .when('/comments', {
          templateUrl: 'comments.html',
          controller: 'CommentsController'
        })
        .when('/comments/:id', {
          templateUrl: 'single-comment.html',
          controller: 'SingleCommentController'
        })
        .otherwise({ redirectTo: '/' });
});

commentApp.factory("Comment", function($resource) {
  return $resource("/api/comments/:id", {id:'@id'},
          {
            get: { cache: true, method: 'get' },
            update: { method: 'PUT' },
          });
});



