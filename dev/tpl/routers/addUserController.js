/** * Created by zzq on 2017/4/14. */define(function(require){    //加载所需模块    var app = require('app');    require('myService');    var loadCss = require('loadCss');    loadCss.loadCss('res/css/addUser.css');//引入css        app.controller('addUserController',function($scope,myService){        $scope.sub = function(){            console.log('正在提交。。。 。..');            // myService.getJson()        }    })})