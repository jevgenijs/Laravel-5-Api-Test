(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('test.htm',
    '<body>\n' +
    'Hello\n' +
    '</body>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    ' <div class="col-md-8 col-md-offset-2" style="padding:20px;position:relative;left:10%;">\n' +
    '\n' +
    '    <div class="page-header">\n' +
    '        <h2>Laravel and Angular Single Page Application</h2>\n' +
    '        <h4>Leave a comment!</h4>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '        <input type="text" class="form-control input-sm" name="author" ng-model="comment.author" placeholder="Name" style="width:150px;line-height:28px;">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '        <textarea class="form-control input-lg" name="comment" ng-model="comment.text" placeholder="Say what you have to say" style="min-width:300px;max-width:300px;;min-height:50px;"></textarea>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group text-right">\n' +
    '        <button type="submit" class="btn btn-primary btn-lg" ng-click="newComment()">Submit</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>\n' +
    '    <br/>\n' +
    '    <br/>\n' +
    '    <div class="comment" ng-hide="loading" ng-repeat="comment in comments" style="max-width: 350px; padding:10px; border: 1px solid black;">\n' +
    '        <h3>Comment #{{ comment.id }} by {{ comment.author }}</h3>\n' +
    '        <p ng-hide="editComment" ng-dblclick="editComment = true">{{ comment.text }}</p>\n' +
    '        <div ng-show="editComment">\n' +
    '            <textarea class="form-control input-lg" name="comment" ng-model="comment.text" placeholder="Say what you have to say" style="min-width:300px;max-width:300px;"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <span><a href="#/" ng-click="deleteComment(comment, $index)" class="text-muted">Delete</a></span>\n' +
    '        <span ng-hide="editComment" ><a href="#/" ng-click="editComment = true" class="text-muted">Edit</a></span>\n' +
    '\n' +
    '        <span ng-show="editComment" ><a href="#/" ng-click="updateComment(comment, $index); editComment = false" class="text-muted">Save</a></span>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
