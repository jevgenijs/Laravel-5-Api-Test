require('angular/angular.min');
require('angular-resource/angular-resource.min');
require('angular-route/angular-route.min');

var commentApp = angular.module('commentApp', ['ngResource', 'ngRoute']);

commentApp.factory("Comment", function($resource) {
  return $resource("/api/comments/:id", {id:'@id'});
});

commentApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '/partials/index.html',
          controller: 'CommentsController'
        })
        .otherwise({ redirectTo: '/' });
});

commentApp.controller("CommentsController", function($scope, Comment) {

  $scope.loadComments = function() {
      Comment.query(function(data) {
        $scope.comments = data;
      });
  };

  $scope.newComment = function() {
    var comment = new Comment($scope.comment);
    comment.$save(function(success) {
        $scope.comments.push(success);
    });
  };

  $scope.deleteComment = function(comment, idx) {
    var c = new Comment(comment);
    c.$delete(function(success) {
        $scope.comments.splice(idx, 1);
    });
  };

  $scope.loadComments();
});


