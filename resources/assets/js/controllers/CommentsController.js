angular.module('commentApp.CommentsController', ['ngResource'])

.controller("CommentsController", function($scope, Comment, $http) {
  $scope.loadComments = function() {
      Comment.query(function(data) {
        console.log('query');
        $scope.comments = data;
      });
  };

  $scope.newComment = function() {
    var comment = new Comment($scope.comment);
    comment.$save(function(success) {
        $scope.comments.push(success);
    });
  };

  $scope.sendMessage = function() {
    var string = "This is a line of text in a channel.\nAnd this is another line of text.";
    console.log(string);
    var payload = {
                    "text": "Autobots, roll out!",
                    "username": "slack-bot",
                    "icon_emoji": ":optimus:",
                    "channel": "@jevgenijs.viznuks"
                  };
    var message = $http({
                method: 'POST',
                url: 'https://hooks.slack.com/services/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', //jevgenijs friends
               // url: 'https://hooks.slack.com/services/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', //galileo
                data: payload,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            });
    console.log(message);
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
})

.controller('SingleCommentController', ['$scope', '$routeParams','Comment',
  function($scope, $routeParams, Comment) {
    $scope.comment = Comment.get({id:$routeParams.id}, function() {});
}]);
