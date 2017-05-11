/**
 * Created by zzq on 2017/5/8.
 */
define(function (require) {
    //加载依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    // loadCss.loadCss('');

    //控制器
    app.controller('AndroidUpdateController',function($scope,myService){
        //初始化页面显示
        myService.getJson('/kinzo-cms/appList/Android') //请求Android产品列表
            .success(function (data) {
                $scope.appList = data.appList;
                console.log(data);
            });
    });
})