/**
 * Created by zzq on 2017/3/24.
 * 配置路由、注册路有事件
 * 依赖app、引入
 */
define(["require","app"],function(require,app){
    var load = require('load');
    //路由事件
    // app.run(function($rootScope,$state){
    //     // $rootScope.$state = $state;
    //     $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    //         load.onLoading();        //loading animate..
    //     });
    //     $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams){
    //         load.close();           //close animate
    //     });
    // });
    //配置路由
    // app.config(function($stateProvider,$urlRouterProvider){
    //     $urlRouterProvider.otherwise('/home'),
    //
    //     $stateProvider
    //         .state('home',{
    //             url:'/home',
    //             templateUrl:'res/tpl/userCollect.html',
    //             controllerUrl:'tpl/userCollectController',
    //             controller:'userCollectController'
    //         })
    // });
    //配置路由结束
})