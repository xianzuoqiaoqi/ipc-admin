define(function(require){var app=require("app");require("myService");var loadCss=require("loadCss");loadCss.loadCss("res/css/AndroidInfo.css"),loadCss.loadCss("res/lib/angular-trix/trix.css"),app.controller("AndroidInfoController",function($scope,myService){$scope.foo="<h1>halo</h1>"})});