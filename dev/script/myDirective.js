/**
 * Created by zzq on 2017/3/27.
 * 配置directive、
 * 依赖app、myService
 */
define(['require','app','myService'],function(require,app){
    
    app.directive('appTop',function(){
        return {
            restrict:'AE',
            replace: true,
            scope:{},
            templateUrl: 'res/tpl/header.html',
            controller: function($scope,myService){
                myService.getJson('res/json/topNavitems.json')
                    .success(function(data){
                        $scope.topNavItem = data.navItem;
                    });
            }
        }
    })
})