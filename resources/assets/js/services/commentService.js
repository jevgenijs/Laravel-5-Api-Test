

/*angular.module('commentService', ['ngResource'])
.factory('Comment', function($resource) {
    return {


        get : function() {
            return $http.get('/api/comments');
        },
        save : function(commentData) {
            console.log('service started');
            return $http({
                method: 'POST',
                url: '/api/comments?author=' + commentData.author + '&text=' + commentData.text,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            });
        },
        save : function(commentData) {
            console.log('service started');
            return $http({
                method: 'POST',
                url: '/api/comments?author=' + commentData.author + '&text=' + commentData.text,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        });
        destroy : function(id) {
            return $http.delete('/api/comments/' + id);
        }
    };
});
*/
