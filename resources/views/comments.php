<!doctype html>
<html lang="en">
    <head> <meta charset="UTF-8">
        <title>Laravel and Angular Comment System</title>
        <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
        <style>
           body {padding-top: 20px;}
            .tabs {margin: 0px; padding: 0px; list-style-type: none;}
            .tabs li {display: inline-block; cursor: pointer; padding: 10px; background: #f6f6f6; color: #999; margin: 0px 3px; font-size: 1.3em;}
            .tabs li:hover {background: #fff; color: #000; }
            .tabs li.active {color: #000; background: #dbeaf0; cursor: auto;}
            .tabs li:first-child {margin-left: 0px;}
            .tabs-data {background: #dbeaf0; padding: 15px;}
            .tabs-data h1 {font-size: 1.6em;}
        </style>
        <script src="js/bundle.js"></script>
      <!--     <script src="js/mainCtrl.js"></script>
        <script src="js/commentService.js"></script> -->
    </head>
    <!-- declare our angular app and controller -->
    <body class="container" ng-app="commentApp">
        <ng-view>

        </ng-view>
    </body>
</html>
