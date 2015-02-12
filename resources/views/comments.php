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
        <ng-view></ng-view>
    </body>
</html>
