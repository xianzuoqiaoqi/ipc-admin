define(["require","app","layer"],function(require,app,layer){layer.config({path:"res/lib/layer/"}),app.factory("myService",function($http){var service={};return service.url="https://easy-mock.com/mock/59006776875d7232a38b139b/ipc/",service.getJson=function(url,requestData,method){return $http({method:method||"GET",url:service.url+url,params:requestData||"",data:requestData||null}).success(function(){})},service})});