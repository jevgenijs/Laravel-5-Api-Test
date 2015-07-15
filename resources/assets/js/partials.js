(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('comments.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '\n' +
    '<div class="col-md-8 col-md-offset-2" style="padding:20px;position:absolute;left:10%;top:0;">\n' +
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
    '        <button type="submit" class="btn btn-primary btn-lg" ng-click="sendMessage()">test</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>\n' +
    '    <br/>\n' +
    '    <br/>\n' +
    '    <div class="comment" ng-hide="loading" ng-repeat="comment in comments" style="max-width: 350px; padding:10px; border: 1px solid black; padding-top:5px;">\n' +
    '        <h3>Comment #{{ comment.id }} by {{ comment.author }}</h3>\n' +
    '        <p ng-hide="editComment" ng-dblclick="editComment = true">{{ comment.text }}</p>\n' +
    '        <div ng-show="editComment">\n' +
    '            <textarea class="form-control input-lg" name="comment" ng-model="comment.text" placeholder="Say what you have to say" style="min-width:300px;max-width:300px;"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <span><a ng-click="deleteComment(comment, $index)" class="text-muted">Delete</a></span>\n' +
    '        <span ng-hide="editComment" ><a ng-click="editComment = true" class="text-muted">Edit</a></span>\n' +
    '        <span ng-hide="editComment" ><a ng-href="#/comments/{{comment.id}}" class="text-muted">View</a></span>\n' +
    '\n' +
    '        <span ng-show="editComment" ><a ng-click="updateComment(comment, $index); editComment = false" class="text-muted">Save</a></span>\n' +
    '    </div>\n' +
    '</div>\n' +
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
  $templateCache.put('menu.html',
    '<div class="row" style="display: block; float left;">\n' +
    '	<div class="col-sm-3" style="display: block; float left;">\n' +
    '	    <ul class="nav nav-tabs nav-stacked nav-pills" role="tablist">\n' +
    '	        <li> <a class="btn-lg" href="#/">Home</a>\n' +
    '	        </li>\n' +
    '	        <li >\n' +
    '	            <a class="btn-lg" href="#/comments">Comments</a>\n' +
    '	        </li>\n' +
    '	         <li >\n' +
    '	            <a class="btn-lg" href="#/players">Players</a>\n' +
    '	        </li>\n' +
    '	        <li>\n' +
    '	            <a class="btn-lg" href="#/team">Team</a>\n' +
    '	        </li>\n' +
    '	    </ul>\n' +
    '	</div>\n' +
    '</div>\n' +
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
  $templateCache.put('players.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '\n' +
    '<div class="col-md-8 col-md-offset-2" style="padding:20px;position:absolute;left:10%;top:0;">\n' +
    '    <div class="page-header">\n' +
    '        <h2>Laravel and Angular Single Page Application</h2>\n' +
    '        <h4>Players section</h4>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group text-right">\n' +
    '        <button type="submit" class="btn btn-primary btn-lg" ng-click="newPlayer()">Submit</button>\n' +
    '        <button type="submit" class="btn btn-primary btn-lg" ng-click="sendMessage()">test</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>\n' +
    '    <br/>\n' +
    '    <br/>\n' +
    '    <div class="comment" ng-hide="loading" ng-repeat="player in players" style="max-width: 350px; padding:10px; border: 1px solid black; padding-top:5px;">\n' +
    '        <h3>player #{{ player.id }} </h3>\n' +
    '        <div>\n' +
    '            {{ player }}\n' +
    '        </div>\n' +
    '\n' +
    '        <span><a ng-click="deletePlayer(player, $index)" class="text-muted">Delete</a></span>\n' +
    '        <span ng-hide="editPlayer" ><a ng-click="editPlayer = true" class="text-muted">Edit</a></span>\n' +
    '        <span ng-hide="editPlayer" ><a ng-href="#/players/{{player.id}}" class="text-muted">View</a></span>\n' +
    '    </div>\n' +
    '</div>\n' +
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
  $templateCache.put('single-comment.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '<div style="padding:20px;position:absolute;left:10%;top:0;">\n' +
    '  	<h3>Comment #{{ comment.id }} by {{ comment.author }}</h3>\n' +
    '    <p ng-hide="editComment">{{ comment.text }}</p>\n' +
    '    <div ng-show="editComment">\n' +
    '    	<textarea class="form-control input-lg" name="comment" ng-model="comment.text" placeholder="Say what you have to say" style="min-width:300px;max-width:300px;"></textarea>\n' +
    '    </div>\n' +
    '\n' +
    '    <a href="#/comments">BACK</a>\n' +
    '</div>\n' +
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
  $templateCache.put('single-player.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '<div style="padding:20px;position:absolute;left:10%;top:0;">\n' +
    '  	<pre> {{ player }}</pre>\n' +
    '\n' +
    '    <div ng-show="editPlayer">\n' +
    '    	<textarea class="form-control input-lg" name="player" ng-model="player.text" placeholder="Say what you have to say" style="min-width:300px;max-width:300px;"></textarea>\n' +
    '    </div>\n' +
    '\n' +
    '    <a href="#/players">BACK</a>\n' +
    '</div>\n' +
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
  $templateCache.put('team.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '\n' +
    '<div class="col-md-8 col-md-offset-2" style="padding:20px;position:absolute;left:10%;top:0;">\n' +
    '    <div class="page-header">\n' +
    '        <h2>Laravel and Angular Single Page Application</h2>\n' +
    '        <h4>Team</h4>\n' +
    '    </div>\n' +
    '\n' +
    '    <h2>Starting Roster</h2>\n' +
    '\n' +
    '    <div class="form-group text-right">\n' +
    '        <table>\n' +
    '            <tr>\n' +
    '                <td style="width:50px;">Top</td>\n' +
    '                <td style="width:50px;">Jungle</td>\n' +
    '                <td style="width:50px;">Mid</td>\n' +
    '                <td style="width:50px;">ADC</td>\n' +
    '                <td style="width:50px;">Support</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td style="width:50px;">{{team.pl1}}</td>\n' +
    '                <td style="width:50px;">{{team.pl2}}</td>\n' +
    '                <td style="width:50px;">{{team.pl3}}</td>\n' +
    '                <td style="width:50px;">{{team.pl4}}</td>\n' +
    '                <td style="width:50px;">{{team.pl5}}</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td style="width:50px;"><button type="submit" class="btn btn-primary btn-lg" ng-click="selectPlayer(1)">Select</button></td>\n' +
    '                <td style="width:50px;"><button type="submit" class="btn btn-primary btn-lg" ng-click="selectPlayer(2)">Select</button></td>\n' +
    '                <td style="width:50px;"><button type="submit" class="btn btn-primary btn-lg" ng-click="selectPlayer(3)">Select</button></td>\n' +
    '                <td style="width:50px;"><button type="submit" class="btn btn-primary btn-lg" ng-click="selectPlayer(4)">Select</button></td>\n' +
    '                <td style="width:50px;"><button type="submit" class="btn btn-primary btn-lg" ng-click="selectPlayer(5)">Select</button></td>\n' +
    '            </tr>\n' +
    '\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    {{team}}\n' +
    '\n' +
    '    <div ng-repeat="player in players">\n' +
    '        {{player.name}}\n' +
    '    </div>\n' +
    '\n' +
    '<!--     <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>\n' +
    '    <br/>\n' +
    '    <br/>\n' +
    '    <div class="comment" ng-hide="loading" ng-repeat="player in players" style="max-width: 350px; padding:10px; border: 1px solid black; padding-top:5px;">\n' +
    '        <h3>player #{{ player.id }} </h3>\n' +
    '        <div>\n' +
    '            {{ player }}\n' +
    '        </div>\n' +
    '\n' +
    '        <span><a ng-click="deletePlayer(player, $index)" class="text-muted">Delete</a></span>\n' +
    '        <span ng-hide="editPlayer" ><a ng-click="editPlayer = true" class="text-muted">Edit</a></span>\n' +
    '        <span ng-hide="editPlayer" ><a ng-href="#/players/{{player.id}}" class="text-muted">View</a></span>\n' +
    '    </div> -->\n' +
    '</div>\n' +
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
  $templateCache.put('welcome.html',
    '<div ng-include src="\'menu.html\'" scope="" onload=""></div>\n' +
    '\n' +
    '<div style="padding:20px;position:absolute;left:10%;top:0;" >\n' +
    'Welcome to the page\n' +
    '</div>\n' +
    '');
}]);
})();
