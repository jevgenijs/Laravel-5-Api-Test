angular.module('commentApp.TeamController', ['ngResource'])

.controller("TeamController", function($scope, Player, Team, $http) {

  console.log('hello');
  $scope.loadPlayers = function() {
      Player.query(function(data) {
        $scope.players = data;
      });
  };

  $scope.team = Team.get({id:1}, function() {});


  $scope.selectPlayer = function(idx) {
    console.log(idx);
  };

  $scope.loadPlayers();
});
