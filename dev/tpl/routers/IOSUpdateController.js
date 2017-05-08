/**
 * Created by zzq on 2017/5/8.
 */
define(function (require) {
    //引依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    // loadCss.loadCss()

    //控制器
    app.controller('IOSUpdateController', function ($scope, myService) {
        //初始化页面展示
        myService.getJson('/kinzo-cms/appList/IOS')
            .success(function (data) {
                $scope.AppList = data.appList;
            })
    });
})