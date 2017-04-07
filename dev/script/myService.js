/**
 * Created by zzq on 2017/3/24.
 * 公用方法在factory定义。
 * 依赖app
 */
define(['require', 'app'], function (require, app)
{
    //服务，存放全局数据
    app.factory('myService', function ($http)
    {
        var service = {};
        //ajax获取json数据
        service.getJson = function (url)
        {
            // load.onLoading();
            return $http({
                method: "GET",
                url: url
            });
        };
        return service;
    });
})