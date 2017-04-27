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
        service.url = "https://easy-mock.com/mock/59006776875d7232a38b139b/ipc/";
        service.getJson = function (url,requestData,method)
        {
            load.onLoading();
            return $http({
                method: method||'GET',
                url:service.url+url,
                params:requestData || '',
                data:requestData || null
            });
        };
        return service;
    });
})
