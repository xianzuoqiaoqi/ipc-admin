/**
 * Created by zzq on 2017/5/9.
 */
define(function (require) {
    //加载依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    loadCss.loadCss('res/css/AndroidInfo.css');
    loadCss.loadCss('res/lib/angular-trix/trix.css');

    //引入UEditor插件


    //控制器
    app.controller('AndroidInfoController', function ($scope, myService) {
        $scope.foo = "<h1>halo</h1>"


        //初始化页面显示内容
        var init = function(){
            //获取当前版本信息
            myService.getJson('kinzo-cms/AppInfo/Android')
                .success(function(data){

                })
        }
    });
})