/**
 * Created by zzq on 2017/3/24.
 * 配置路由、注册路有事件
 * 依赖app、引入
 */
define(["require", "app", 'myService'], function (require, app, myService) {
    //路由事件
    app.run(function ($rootScope, $state, $log) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //启动路由加载动画
            $rootScope.loadRouter = layer.load(1, {shade: [0.5, '#000']});
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log('stateChangeSuccess');
            //关闭路由家在动画
            layer.close($rootScope.loadRouter);
        });
    })
    //配置路由
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home'),
                $stateProvider
                    .state('home', {//首页，控制面板
                        url: '/home',
                        views: {
                            "": {
                                templateUrl: "res/tpl/routers/home.html",
                                controllerUrl: "tpl/routers/homeController",
                                controller: "homeController"
                            },
                            "userList@home": {  // 控制面板页的路由块
                                templateUrl: "res/tpl/routers/addIpc.html",
                                controllerUrl: "tpl/routers/addIpcController",
                                controller: "addIpcController"
                            },
                            "item1@home": {
                                templateUrl: "res/tpl/routers/home-panel/item1.html",
                                controllerUrl: "tpl/routers/home-panel/item1Controller",
                                controller: "item1Controller"
                            },
                            "dev_area@home": {
                                templateUrl: "res/tpl/routers/home-panel/dev_area.html",
                                controllerUrl: "tpl/routers/home-panel/dev_areaController",
                                controller: "dev_areaController"
                            }
                        }
                    })
                    .state('userList', {//用户列表
                        url: '/userlist',
                        templateUrl: 'res/tpl/routers/userList.html',
                        controllerUrl: 'tpl/routers/userListController',
                        controller: 'userListController'
                    })
                    .state('addUser', {//添加用户
                        url: '/addUser',
                        templateUrl: 'res/tpl/routers/addUser.html',
                        controllerUrl: 'tpl/routers/addUserController',
                        controller: 'addUserController'
                    })
                    .state('userInfo', {//用户信息
                        url: '/userInfo/:accountId',
                        templateUrl: 'res/tpl/routers/userInfo.html',
                        controllerUrl: 'tpl/routers/userInfoController',
                        controller: 'userInfoController'
                    })
                    .state('ipcList', {//设备列表
                        url: '/ipcList',
                        templateUrl: 'res/tpl/routers/ipcList.html',
                        controllerUrl: 'tpl/routers/ipcListController',
                        controller: 'ipcListController'
                    })
                    .state('addIpc', {//新增设备
                        url: '/addIpc',
                        templateUrl: 'res/tpl/routers/addIpc.html',
                        controllerUrl: 'tpl/routers/addIpcController',
                        controller: 'addIpcController'
                    })
                    .state('ipcInfo', {//设备详情
                        url: '/ipcInfo/:cid',
                        templateUrl: 'res/tpl/routers/ipcInfo.html',
                        controllerUrl: 'tpl/routers/ipcInfoController',
                        controller: 'ipcInfoController'
                    })
                    .state('devTypeList', {//设备型号列表
                        url: '/devTypeList',
                        templateUrl: 'res/tpl/routers/devTypeList.html',
                        controllerUrl: 'tpl/routers/devTypeListController',
                        controller: 'devTypeListController'
                    })
                    .state('devConfig', {   // json格式化
                        url: '/devConfig/:devTypeId',
                        templateUrl: 'res/tpl/routers/devConfig.html',
                        controllerUrl: 'tpl/routers/devConfigController',
                        controller: 'devConfigController'
                    })
                    .state('firmwareInfo', {//设备固件版本信息
                        url: '/firmwareInfo/:devTypeId',
                        templateUrl: 'res/tpl/routers/firmwareInfo.html',
                        controllerUrl: 'tpl/routers/firmwareInfoController',
                        controller: 'firmwareInfoController'
                    })
                    .state('IOSUpdate', {//app升级维护
                        url: '/IOSUpdate',
                        templateUrl: 'res/tpl/routers/IOSUpdate.html',
                        controllerUrl: 'tpl/routers/IOSUpdateController',
                        controller: 'IOSUpdateController'
                    })
                    .state('AndroidUpdate', {//app升级维护
                        url: '/AndroidUpdate',
                        templateUrl: 'res/tpl/routers/AndroidUpdate.html',
                        controllerUrl: 'tpl/routers/AndroidUpdateController',
                        controller: 'AndroidUpdateController'
                    })
                    .state('appInfo', {//一款app的详细信息
                        url: '/appInfo/:appId',
                        templateUrl: 'res/tpl/routers/appInfo.html',
                        controllerUrl: 'tpl/routers/appInfoController',
                        controller: 'appInfoController'
                    })
                    .state('AndroidInfo', {//一款app的详细信息
                        url: '/Android/:appId',
                        templateUrl: 'res/tpl/routers/AndroidInfo.html',
                        controllerUrl: 'tpl/routers/AndroidInfoController',
                        controller: 'AndroidInfoController'
                    })
                    .state('commonReports', {// 常用报表
                        url: '/commonReports',
                        templateUrl: 'res/tpl/routers/commonReports.html',
                        controllerUrl: 'tpl/routers/commonReportsController',
                        controller: 'commonReportsController'
                    })
                    .state('unusualDevice', {// 异常设备
                        url: '/unusualDevice',
                        templateUrl: 'res/tpl/routers/unusualDevice.html',
                        controllerUrl: 'tpl/routers/unusualDeviceController',
                        controller: 'unusualDeviceController'
                    })
                    .state('reportList', {// 报表列表
                        url: '/reportList',
                        templateUrl: 'res/tpl/routers/reportList.html',
                        controllerUrl: 'tpl/routers/reportListController',
                        controller: 'reportListController'
                    })
        });
    //配置路由结束
})

