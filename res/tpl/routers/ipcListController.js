define(function(require){var app=require("app");require("myService"),require("load"),loadCss=require("loadCss"),loadCss.loadCss("res/css/ipcList.css"),app.controller("ipcListController",function($scope,myService){$scope.dateOption={pType:"",pId:"",pInfo:"",startPage:"1",pageSize:"2",startTime:"",endTime:""},console.log($scope.dateOption.startTime),$scope.startDateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.endDateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.updateMin=function(){$scope.endDateOptions.minDate=$scope.dateOption.startTime,$scope.pageInfo.startTime=isNaN(new Date($scope.dateOption.startTime).getTime())?"":new Date($scope.dateOption.startTime).getTime()},$scope.updateMax=function(){$scope.startDateOptions.maxDate=$scope.dateOption.endTime,$scope.pageInfo.endTime=isNaN(new Date($scope.dateOption.endTime).getTime())?"":new Date($scope.dateOption.endTime).getTime()},$scope.startOpen=function(){$scope.startPopupOpened=!0},$scope.endOpen=function(){$scope.endPopupOpened=!0},$scope.startPopupOpened=!1,$scope.endPopupOpened=!1,$scope.pageInfo={devType:"",p2pId:"",firmware:"",startTime:"",endTime:"",startPage:1,pageSize:10};var url="kinzo-cms/device/ipcs",showIpcList=function(url,requestData,method){myService.getJson(url,requestData,method).success(function(data){load.close(),$scope.ipcInfoList=data.ipcInfoList,console.log(data.ipcInfoList),$scope.totalCount=data.totalCount,$scope.maxSize=5,$scope.startPage=$scope.pageInfo.startPage})};showIpcList(url,$scope.pageInfo),$scope.pageChange=function(){console.log($scope.startPage),$scope.pageInfo.startPage=$scope.startPage,showIpcList(url,$scope.pageInfo)},$scope.goSearch=function(){$scope.pageInfo.startPage=1,console.log($scope.pageInfo),showIpcList(url,$scope.pageInfo)}})});