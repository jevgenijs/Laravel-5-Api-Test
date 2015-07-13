angular.module('commentApp.PlayersController', ['ngResource'])

.controller("PlayersController", function($scope, Player, $http) {
  $scope.loadPlayers = function() {
      Player.query(function(data) {
        console.log('query');
        $scope.players = data;
      });
  };

  $scope.newPlayer = function() {
    $scope.player = {
      name : 'Jesse',
      surname : 'Cox',
      nickname : 'The Demolisher',
      age : getRandomInt(16,25),
      form : getRandomInt(0,5),
      wage : getRandomInt(0,1000),
      exp: getRandomInt(0,500),
      leadership : getRandomInt(0,5),
      tp : getRandomInt(0,2000),
      loyalty : getRandomInt(0,5),
      specialty : getRandomInt(0,5),
      sk1 : getRandomInt(0,8),
      sk2 : getRandomInt(0,8),
      sk3 : getRandomInt(0,8),
      sk4 : getRandomInt(0,8),
      sk5 : getRandomInt(0,8),
      sk6 : getRandomInt(0,8),
      sk7 : getRandomInt(0,8),
      sk8 : getRandomInt(0,8),
      sk9 : getRandomInt(0,8),
      sk10 : getRandomInt(0,8),
    };
    var player = new Player($scope.player);
    player.$save(function(success) {
        $scope.players.push(success);
    });
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  $scope.deletePlayer = function(players, idx) {
    var c = new Player(players);
    c.$delete(function(success) {
        $scope.players.splice(idx, 1);
    });
  };

  $scope.updatePlayer = function(players, idx) {
    var c = new Player(players);
    c.$update(function(success) {
         $scope.players.splice(idx, 1, success);
    });
  };

  $scope.bgColor = function() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  $scope.loadPlayers();
})

.controller('SinglePlayerController', ['$scope', '$routeParams','Player',
  function($scope, $routeParams, Player) {
    $scope.player = Player.get({id:$routeParams.id}, function() {});
}]);
