define(function(require){var app=require("app");require("myService");var loadCss=require("loadCss");loadCss.loadCss("res/css/firmwareInfo.css"),loadCss.loadCss("res/lib/angular-trix/trix.css"),app.controller("firmwareInfoController",function($scope,myService){function init(){myService.getJson("/kinzo-cms/current-firmwareInfo").success(function(data){$scope.firmwareInfo=data}),myService.getJson("kinzo-cms/current-firmwareInfo/back").success(function(data){$scope.newFirmwareInfo=data,""==$scope.newFirmwareInfo.startTime?new Date:$scope.newFirmwareInfo.startTime}),gethistoryFirmList("kinzo-cms/history-firmwareList",$scope.pageInfo)}$scope.startDateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.updateMin=function(){$scope.newFirmwareInfo.startTime=isNaN(new Date($scope.newFirmwareInfo.startTime).getTime())?"":new Date($scope.newFirmwareInfo.startTime).getTime()},$scope.startOpen=function(){$scope.startPopupOpened=!0},$scope.startPopupOpened=!1,$scope.sear=function(){console.log(new Date($scope.startTime).getTime()),console.log($scope.startTime)},$scope.pageInfo={startPage:1,pageSize:2};var gethistoryFirmList=function(url,requestDate){myService.getJson(url,requestDate).success(function(data){$scope.historyFirmList=data.firmwareList,$scope.totalCount=data.totalCount,$scope.maxSize=5,$scope.startPage=$scope.pageInfo.startPage})};init(),$scope.upDate=function(){console.log($scope.newFirmwareInfo),myService.getJson("kinzo-cms/current-firmwareInfo/update",$scope.newFirmwareInfo,"POST").success(function(){layer.msg("更新成功",{icon:1,time:1500})}),$scope.newFirmwareInfo={},myService.getJson("kinzo-cms/current-firmwareInfo/saveDate",$scope.newFirmwareInfo,"POST"),init()},$scope.saveDate=function(){console.log($scope.newFirmwareInfo.foo),myService.getJson("kinzo-cms/current-firmwareInfo/saveDate",$scope.newFirmwareInfo,"POST").success(function(){layer.msg("保存完成",{icon:1,time:1500})})},$scope.pageChange=function(){$scope.pageInfo.startPage=$scope.startPage,gethistoryFirmList("kinzo-cms/history-firmwareList",$scope.pageInfo)}})});