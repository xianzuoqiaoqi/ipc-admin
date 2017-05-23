/**
 * Created by zzq on 2017/3/24.
 * 定义ng模块,加入各种依赖组件
 * 返回ng模块
 */
define(["require", "angular", "asyncLoader",'textAngular', "textAngular-rangy","uiRouter", 'angularAnimate', 'angularTouch', 'angular-nice-bar', 'uiBootstrap', 'angular-sanitize'], function (require, angular, asyncLoader) {
    console.log(textAngular);
    var app = angular.module('app', ['ui.router', 'ngNiceBar', 'ui.bootstrap', 'ngSanitize']);
    asyncLoader.configure(app); //配置异步加载模块，异步加载路由的控制器
    return app;
})