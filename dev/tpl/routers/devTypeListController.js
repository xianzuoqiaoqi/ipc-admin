/** * Created by zzq on 2017/5/3. */define(function (require) {    //加载所需模块    var app = require('app');    require('myService');    var loadCss = require('loadCss');    loadCss.loadCss('res/css/devTypeList.css');//引入css    //控制器    app.controller('devTypeListController', function ($scope, myService, storage) {        // 页面布局相关        $scope.maxSize = 5;//设置显示的页码数量        // 基础数据        //初始化向后台请求devTypeList数据时的参数        $scope.pageInfo = {            startPage: 1,//索要的页码            pageSize: storage.get('devTypeListPageSize'),//每页条数            dev_type_id: '',// 设备型号id            type_name: '',  // 型号名            type_desp: '',  // 型号备注            last_rom_date: ''// 最新固件日期        }        //后台接口        var url = '/kinzo-cms/dev/dev_type_list';        //请求某页数据的函数        var getDevTypeList = function (url, requestDate) {            myService.getJson(url, requestDate)                .success(function (data) {                    $scope.devTypeList = data.dev_type_list;//获取类型列表数据                    $scope.totalCount = data.totalCount;//获取总条数                    $scope.startPage = $scope.pageInfo.startPage                })        };        //默认请求第一页        getDevTypeList(url, $scope.pageInfo);        //点击页码时将索要的页码存入ajax请求参数内        $scope.pageChange = function () {            $scope.pageInfo.startPage = $scope.startPage;            //携带新参数重新请求            getDevTypeList(url, $scope.pageInfo);        }    })})