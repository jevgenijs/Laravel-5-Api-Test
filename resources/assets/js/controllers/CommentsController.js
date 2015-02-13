angular.module('commentApp.CommentsController', []).controller("CommentsController", function($scope, Comment) {

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

  $scope.updateComment = function(comment, idx) {
    var c = new Comment(comment);
    c.$update(function(success) {
         $scope.comments.splice(idx, 1, success);
    });
  };

  $scope.bgColor = function() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };
  $scope.loadComments();
});
