angular.module('commentCtrl', [])

.controller('commentController', ['$scope', '$http', 'Comment',
    function($scope, $http, Comment) {
    $scope.commentData = {};
    $scope.loading = true;

    Comment.get()
        .success(function(data) {
            $scope.comments = data;
            $scope.loading = false;
            console.log($scope.comments);
        });

    $scope.submitComment = function() {
        $scope.loading = true;
        var comment = $scope.commentData;
        Comment.save(comment)
            .success(function(data) {

                console.log('success');

                Comment.get()
                    .success(function(getData) {
                        $scope.comments = getData;
                        $scope.loading = false;
                        $scope.commentData = {};
                    });

            })
            .error(function(data) {
                console.log(data);
            });
    };

    $scope.deleteComment = function(id) {
        $scope.loading = true;
        Comment.destroy(id)
            .success(function(data) {
                Comment.get()
                    .success(function(getData) {
                        $scope.comments = getData;
                        $scope.loading = false;
                    });
            });
    };
}]);
