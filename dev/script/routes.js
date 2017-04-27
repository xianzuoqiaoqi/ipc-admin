/**
 * Created by zzq on 2017/3/24.
 * 配置路由、注册路有事件
 * 依赖app、引入
 */
define(["require","app"],function(require,app){
    var load = require('load');
    //路由事件
    app.run(function($rootScope,$state,$log){
        // $rootScope.$state = $state;
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            load.onLoading();        //loading animate..
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams){
            console.log('stateChangeSuccess');
            load.close();           //close animate
        });
    })
    //配置路由
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home'),

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'res/tpl/routers/home.html',
                // controllerUrl:'tpl/userCollectController',
                // controller:'userCollectController'
            })
            .state('userList',{
                url:'/userlist',
                templateUrl:'res/tpl/routers/userList.html',
                controllerUrl:'tpl/routers/userListController',
                controller:'userListController'
            })
            .state('addUser',{
                url:'/addUser',
                templateUrl:'res/tpl/routers/addUser.html',
                controllerUrl:'tpl/routers/addUserController',
                controller:'addUserController'
            })
            .state('userInfo',{
                url:'/userInfo/:accountId',
                templateUrl:'res/tpl/routers/userInfo.html',
                controllerUrl:'tpl/routers/userInfoController',
                controller:'userInfoController'
            })
            .state('ipcList',{
                url:'/ipcList',
                templateUrl:'res/tpl/routers/ipcList.html',
                controllerUrl:'tpl/routers/ipcListController',
                controller:'ipcListController'
            })
            .state('addIpc',{
                url:'/addIpc',
                templateUrl:'res/tpl/routers/addIpc.html',
                controllerUrl:'tpl/routers/addIpcController',
                controller:'addIpcController'
            })
            .state('ipcInfo',{
                url:'/ipcInfo/:cid',
                templateUrl:'res/tpl/routers/ipcInfo.html',
                controllerUrl:'tpl/routers/ipcInfoController',
                controller:'ipcInfoController'
            })
    });
    //配置路由结束
})