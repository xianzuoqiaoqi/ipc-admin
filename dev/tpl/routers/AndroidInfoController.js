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
        $scope.current = "<h1>halo</h1>"
        $scope.history = "<h1>halo</h1>"

        //时间选择器配置
        $scope.startDateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),//设置最大时间不可超过当前时间
            startingDay: 1
        };
        // $scope.startTime = new Date();
        //当时间改变时,将时间格式转为时间戳格式，然后存入$scp[e.pageInfo
        $scope.updateMin = function () {
            //当开始时间改变时，设置pageInfo.startTime
            $scope.newFirmwareInfo.startTime = isNaN(new Date($scope.newFirmwareInfo.startTime).getTime()) ? '' : new Date($scope.newFirmwareInfo.startTime).getTime();
        };
        //展开隐藏设置
        $scope.startOpen = function () {
            $scope.startPopupOpened = true;
        };
        $scope.startPopupOpened = false;

        $scope.sear = function(){
            console.log(new Date($scope.startTime).getTime());
            console.log($scope.startTime);
        }
        //日期设置结束


        //初始化页面显示内容
        var init = function(){
            //获取当前版本信息
            myService.getJson('kinzo-cms/AppInfo/Android')
                .success(function(data){

                })
        }
    });
})