define(["require","app"],function(require,app){var load=require("load");app.run(function($rootScope,$state){$rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){load.onLoading()}),$rootScope.$on("$stateChangeSuccess",function(event,toState,toParams,fromState,fromParams){load.close()})}),app.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{url:"/home",templateUrl:"res/tpl/routers/home.html"}).state("userList",{url:"/userlist",templateUrl:"res/tpl/routers/userList.html",controllerUrl:"tpl/routers/userListController",controller:"userListController"})})});