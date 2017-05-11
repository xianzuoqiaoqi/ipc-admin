/**
 * Created by zzq on 2017/5/9.
 */
define(function (require) {
    //加载依赖
    var app = require('app');
    require('myService');
    var loadCss = require('loadCss');
    loadCss.loadCss('res/css/AndroidInfo.css');

    //引入UEditor插件
    require('UEditor');
    require('UEditorConfig');
    window.ZeroClipboard = require('ZeroClipboard');//将ZeroClipboard定义为全局变量
    console.log(UE);
    //控制器
    app.controller('AndroidInfoController', function ($scope, myService) {
        //实例化编辑器并配置
        var ue = UE.getEditor('currentContent', {
            toolbars: [
                ['inserttitle', 'paragraph', 'link', 'unlink', 'spechars', '|', 'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify', 'fullscreen', '|', 'undo', 'redo', '|', 'drafts'],
                ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|', 'selectall', 'cleardoc']
            ],
            autoHeightEnabled: true,
            autoFloatEnabled: true
        });
        //初始化页面显示内容
        var init = function(){
            //获取当前版本信息
            myService.getJson('kinzo-cms/AppInfo/Android')
                .success(function(data){

                })
        }
    });
})