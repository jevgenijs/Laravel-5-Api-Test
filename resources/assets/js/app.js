require('angular/angular.min');
require('angular-resource/angular-resource.min');
require('angular-route/angular-route.min');
require('./controllers/CommentsController');
require('./controllers/PlayersController');
require('./controllers/TeamController');
require('./partials');

var commentApp = angular.module('commentApp', ['ngResource', 'ngRoute', 'partialsModule', 'commentApp.CommentsController', 'commentApp.PlayersController', 'commentApp.TeamController']);

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
        .when('/players', {
          templateUrl: 'players.html',
          controller: 'PlayersController'
        })
        .when('/team', {
          templateUrl: 'team.html',
          controller: 'TeamController'
        })
        .when('/players/:id', {
          templateUrl: 'single-player.html',
          controller: 'SinglePlayerController'
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

commentApp.factory("Player", function($resource) {
  return $resource("/api/players/:id", {id:'@id'},
          {
            get: { cache: true, method: 'get' },
            update: { method: 'PUT' },
          });
});

commentApp.factory("Team", function($resource) {
  return $resource("/api/teams/:id", {id:'@id'},
          {
            get: { cache: true, method: 'get' },
            update: { method: 'PUT' },
          });
});

