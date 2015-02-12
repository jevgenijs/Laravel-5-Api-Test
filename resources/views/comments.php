<!doctype html>
<html lang="en">
    <head> <meta charset="UTF-8">
        <title>Laravel and Angular Comment System</title>
        <style>
            body        { padding-top:30px; }
            form        { padding-bottom:20px; }
            .comment    { padding-bottom:20px; }
        </style>
        <script src="js/app.js"></script>
      <!--     <script src="js/mainCtrl.js"></script>
        <script src="js/commentService.js"></script> -->
    </head>
    <!-- declare our angular app and controller -->
    <body class="container" ng-app="commentApp">
        <div class="col-md-8 col-md-offset-2"  ng-controller="commentController">

            <div class="page-header">
                <h2>Laravel and Angular Single Page Application</h2>
                <h4>Commenting System</h4>
            </div>

            <div class="form-group">
                <input type="text" class="form-control input-sm" name="author" ng-model="commentData.author" placeholder="Name">
            </div>

            <div class="form-group">
                <input type="text" class="form-control input-lg" name="comment" ng-model="commentData.text" placeholder="Say what you have to say">
            </div>

            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary btn-lg" ng-click="submitComment()">Submit</button>
            </div>

            <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>

            <div class="comment" ng-hide="loading" ng-repeat="comment in comments">
                <h3>Comment #{{ comment.id }} <small>by {{ comment.author }}</h3>
                <p>{{ comment.text }}</p>
                <p><a href="#" ng-click="deleteComment(comment.id)" class="text-muted">Delete</a></p>
            </div>
        </div>
    </body>
</html>
