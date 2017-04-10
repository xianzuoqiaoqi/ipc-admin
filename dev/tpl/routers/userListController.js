/**
 * Created by zzq on 2017/4/10.
 */
define(function(require){
    //加载所需模块
    var app = require('app');
    require('myService');
    require('load');
    loadCss = require('loadCss');
    loadCss.loadCss('res/css/userList.css');//引入css
    
    app.controller('userListController',function($scope,myService){
        //定义请求某页数据的函数，传入请求地址和请求参数
        var showUserList = function(url,requestData){
            requestData = $scope.pageInfo;
            
            myService.getJson(url,requestData)
            //请求成功时的回调函数，将获取的数据进行处理
                .success(function(data){
                    load.close();
                    $scope.userList = data.userList;//将获取到的列表数据存入scope
                    $scope.totalItems = data.totalItems;//将总条目数存入scope
                    $scope.maxSize = 5;//设置显示的页码数量
                    $scope.currentPage = $scope.pageInfo.currentPage;//设置当前页码
                })
        };
        //向后台请求数据时携带的参数
        $scope.pageInfo = {
            currentPage:1,      //索要的页码
            itemsPerPage:10     //索要的条数
        };
        //路由加载完成后默认请求第一页
        showUserList('res/json/userList.json',$scope.pageInfo);
        //点击页码时将索要的页码存入ajax请求参数内
        $scope.pageChange = function(){
            console.log($scope.currentPage);
            $scope.pageInfo.currentPage = $scope.currentPage;
            showUserList('res/json/userList.json',$scope.pageInfo);//携带新参数重新请求
        }
    })
})