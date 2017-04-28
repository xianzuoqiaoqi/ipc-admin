/**
 * Created by zzq on 2017/3/17.
 * 启动angular
 */
define(["require", "layer"], function (require,layer)
{
    layer.config({
        path:'res/lib/layer/'
    });
    var startLoading = layer.load(1,{shade:[0.5,'#000']});   //开始执行动画
    require(["angular","routes","myDirective"],function(angular){
        require(['domReady!'], function (document)
        {     //domReady依赖的!前缀来强制require()回调函数在执行之前等待DOM Ready。
            /*手工启动angular*/
            window.loading.finish(function ()
            {
                angular.bootstrap(document,['app']);
                // layer.close(startLoading);//结束动画
            });
        });
    })
})