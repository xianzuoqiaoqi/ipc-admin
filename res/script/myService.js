define(["require","app","layer"],function(require,app,layer){app.factory("myService",function($http){var service={};return service.url="https://easy-mock.com/mock/5902c5887a878d73716ded63/ipc-admin/",service.getJson=function(url,requestData,method){var index=layer.load(1,{shade:[.5,"#000"]});return $http({method:method||"GET",url:service.url+url,params:requestData||"",data:requestData||null}).success(function(){layer.close(index)})},service})});