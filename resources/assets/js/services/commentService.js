angular.module('commentService', [])
.factory('Comment', function($http) {
    return {
        get : function() {
            return $http.get('/api/comments');
        },
        save : function(commentData) {
            console.log('service started');
            return $http({
                method: 'POST',
                url: '/api/comments',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: commentData
            });
        },
        destroy : function(id) {
            return $http.delete('/api/comments/' + id);
        }
    };
});
