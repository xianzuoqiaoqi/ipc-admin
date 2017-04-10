/**
 * Created by zzq on 2017/3/27.
 * 配置directive、
 * 依赖app、myService
 */
define(['require','app','loadCss','myService'],function(require,app,loadCss){
    app.directive('appTop',function(){
        return {
            restrict:'AE',
            replace: true,
            scope:{},
            templateUrl: 'res/tpl/block/app-top.html',
            controller: function($scope,myService){
                loadCss.loadCss('res/css/top.css');
                $scope.username='zzq';
                $scope.userOperation = ['个人档案','更改密码','退出登录'];
            }
        }
    })
        .directive('appLeft',function(){
            return {
                restrict:'AE',
                replace: true,
                scope:{},
                templateUrl: 'res/tpl/block/app-left.html',
                controller: function($scope,myService){
                    loadCss.loadCss('res/css/left.css');
                    myService.getJson('res/json/leftItem.json')
                        .success(function(data){
                            $scope.leftItem = data.leftItem;
                            console.log($scope.leftItem)
                        });
                },
                link:function(scope,ele,attr){
                    scope.toggle = function(index){
                        this.Item.isShow = !this.Item.isShow;
                    };
                }
            }
        })
        .directive('appContent',function(){
            return {
                restrict:'AE',
                replace:true,
                scope:{},
                templateUrl:'res/tpl/block/app-content.html',
                controller:function($scope){
                    loadCss.loadCss('res/css/content.css');
                }
            }
        })
})