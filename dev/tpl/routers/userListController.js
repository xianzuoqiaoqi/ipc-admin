/**
 * Created by zzq on 2017/4/10.
 */
define(function(require){
    //加载所需模块
    var app = require('app');
    require('myService');
    loadCss = require('loadCss');
    loadCss.loadCss('res/css/userList.css');//引入css
    
    app.controller('userListController',function($scope,myService){
        //日期插件配置及操作
        //初始化查询条件
        $scope.dateOption = {
            startTime: '',
            endTime: '',
        };
    
        //时间选择器配置
        $scope.startDateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),//设置最大时间不可超过当前时间
            startingDay: 1
        };
        $scope.endDateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            startingDay: 1
        };
    
        //当有一个时间改变时，重置另一个的时间范围
        $scope.updateMin = function(){
            $scope.endDateOptions.minDate = $scope.dateOption.startTime;
            //当开始时间改变时，设置pageInfo.startTime
            $scope.pageInfo.startTime = isNaN(new Date($scope.dateOption.startTime).getTime())?'':new Date($scope.dateOption.startTime).getTime();
        };
        $scope.updateMax = function(){
            $scope.startDateOptions.maxDate = $scope.dateOption.endTime;
            //当结束时间改变时，设置pageInfo.endTime
            $scope.pageInfo.endTime = isNaN(new Date($scope.dateOption.endTime).getTime())?'':new Date($scope.dateOption.endTime).getTime();
        };
    
        //时间面板展开隐藏设置
        $scope.startOpen = function() {
            $scope.startPopupOpened = true;
        };
        $scope.endOpen = function() {
            $scope.endPopupOpened = true;
        };
        $scope.startPopupOpened = false;
        $scope.endPopupOpened = false;

        
        //定义请求某页数据的函数，传入请求地址和请求参数
        var showUserList = function(url,requestData,method){
            
            myService.getJson(url,requestData,method)
            //请求成功时的回调函数，将获取的数据进行处理
                .success(function(data){
                    $scope.userInfoList = data.userInfoList;//将获取到的列表数据存入scope
                    $scope.totalCount = data.totalCount;//将总条目数存入scope
                    $scope.maxSize = 5;//设置显示的页码数量
                    $scope.startPage = $scope.pageInfo.startPage;//设置当前页码
                })
        };
        //初始化向后台请求数据时携带的参数
        $scope.pageInfo = {
            loginType:'',//账号类型
            loginName:'',//账号名
            p2pId:'',//
            startTime:'',
            endTime:'',
            startPage:1,      //索要的页码
            pageSize:2     //每页条数
        };
        
        
        
        //路由加载完成后默认请求第一页
        var url = 'kinzo-cms/user/accounts'//联测请求后台数据
        
        //页面初始化显示
        showUserList(url,$scope.pageInfo);//发起请求，联测
        
        //点击页码时将索要的页码存入ajax请求参数内
        $scope.pageChange = function(){
            $scope.pageInfo.startPage = $scope.startPage;
            //携带新参数重新请求
            showUserList(url,$scope.pageInfo);//携带新参数重新请求，联测
        };
        
        //条件查询
        $scope.goSearch = function(){
            $scope.pageInfo.startPage = 1;//页码初始化为1
            //开始查询
            showUserList(url,$scope.pageInfo);//发起请求，联测
        }
    })
})