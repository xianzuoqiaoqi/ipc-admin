/**
 * Created by zzq on 2017/3/24.
 * 公用方法在factory定义。
 * 依赖app
 */
define(['require', 'app','layer'], function (require, app,layer)
{
    
    //服务，存放全局数据
    app.factory('myService', function ($http)
    {
        var service = {};
        //ajax获取json数据
        service.url = "https://easy-mock.com/mock/59006776875d7232a38b139b/ipc/";
        service.getJson = function (url,requestData,method)
        {
            var index = layer.load(1, {
                shade: [0.5,'#000'] //0.1透明度的白色背景
            });
            return $http({
                method: method||'GET',
                url:service.url+url,
                params:requestData || '',
                data:requestData || null
            }).success(function(){
                layer.close(index);
            });
        };
        return service;
    });
})
