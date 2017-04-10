/**
 * Created by zzq on 2017/3/31.
 * 加载动画插件，需要引入load.css。
 * load.onLoading()启动动画.load.close()关闭动画。
 */
var load = (function ()
{
    return {
        onLoading: function (){
            if(!document.getElementById('loadBox')){
                var loadBox = document.createElement('div');
                document.body.appendChild(loadBox);
                loadBox.id = 'loadBox';
                loadBox.innerHTML = "<div id='box'><div id='box1'></div><div id='box2'></div></div>";
            }
        },
        close: function ()
        {
            if(document.getElementById('loadBox')){
                var loadBox = document.getElementById('loadBox');
                document.body.removeChild(loadBox);
            };
        }
    };
}());