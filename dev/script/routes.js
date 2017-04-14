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
            .state('adduser',{
                url:'/adduser',
                templateUrl:'res/tpl/routers/add-user.html',
                controllerUrl:'tpl/routers/adduserController',
                controller:'adduserController'
            })
            .state('user-detail',{
                url:'/userDetail',
                templateUrl:'res/tpl/routers/user-detail.html'
            })
    });
    //配置路由结束
})