/** * Created by zzq on 2017/4/20. */define(function(require){    //加载所需模块    var app = require('app');    require('myService');    var loadCss = require('loadCss');    //加载该页面css文件        app.controller('userInfoController',function($scope,myService,$stateParams){        //初始化请求参数        var requestData = {            accountId:""        };        // var url = 'res/json/userInfo.json';//本地模拟请求json数据        var url = 'kinzo-cms/user/accounts/'+$stateParams.accountId;                        myService.getJson(url,requestData)            .success(function(data){                console.log(data);                $scope.data = data;            });        // 修改用户状态        //初始化隐藏        $scope.isShow = false;        $scope.changeState = function () {            // $scope.data.user_name_status            $scope.isShow = true;        }        $scope.commitState = function () {            $scope.isShow = false;  // 隐藏            // ajax提交成功后设置为新状态            myService.getJson('kinzo-cms/userInfo/update_status',requestData)                .success(function(data){                    console.log(data)                    if(data.code == 200){                        $scope.data.user_name_status = $scope.statu;                    }                });        }        //         $scope.hideModel = function () {            console.log(222)            $scope.isShow = false;        }        //tabs        $scope.tabs = [            {title:"维修记录",content:"维修记录"},            {title:"固件版本信息",content:"固件版本信息"},            {title:"登录记录",content:"登录历史"}        ];        $scope.leave = function($event){            console.log($event);        };        $scope.tabIn = function(index){            console.log(index);        }    })})