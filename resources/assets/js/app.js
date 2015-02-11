require('angular');
console.log('hello');
var myapp = angular.module("myapp", []);

myapp.controller("HelloController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "World, AngularJS";
    $scope.helloTo.changed = "I changed";
} );
