/**
 * Created by zzq on 2017/5/9.
 */
define(function (require) {
    //加载依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    loadCss.loadCss('res/css/AndroidInfo.css');
    loadCss.loadCss('res/lib/textAngular/font-awesome/css/font-awesome.min.css');
    loadCss.loadCss('res/lib/textAngular/textAngular.css');

    //引入UEditor插件
    var textAngularManager = require('textAngular');


    //控制器
    app.controller('AndroidInfoController', function ($scope, myService,textAngularManager) {
        //实例化编辑器并配置


        //初始化页面显示内容
        var init = function(){
            //获取当前版本信息
            myService.getJson('kinzo-cms/AppInfo/Android')
                .success(function(data){

                })
        }
    });
})