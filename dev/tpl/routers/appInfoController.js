/**
 * Created by zzq on 2017/5/8.
 */
define(function (require) {
    //引入依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    //loadCss.loadCss('');

    //控制器
    app.controller('appInfoController',function($scope,myService,$stateParams){
        //初始化页面内容
        myService.getJson('kinzo-cms/appInfo/IOS/'+$stateParams.appId)
            .success(function(data){
                $scope.appVerList = data.appVerList;
            });

    })
})