/**
 * Created by zzq on 2017/3/17.
 * 配置require、配置资源路径
 */
window.loading={
    finish:function(callback){
        //保留这个方法做一些加载完成后的处理，比如可以在这里结束加载动画
        callback();
    },
    load:function(){
        // var domain='https://865077695.github.io/admin/';
        var domain='';
        var baseUrl = domain+'res';
        require.config({
            baseUrl:baseUrl,
            paths:{
                "domReady":["https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min","lib/require/domReady.min"],
                "angular":["https://cdn.bootcss.com/angular.js/1.5.5/angular.min","lib/angular/angular.min"],
                "angularTouch":["https://cdn.bootcss.com/angular.js/1.3.20/angular-touch.min","lib/angular/angular-touch.min"],
                "angularAnimate":["https://cdn.bootcss.com/angular.js/1.3.20/angular-animate.min","lib/angular/angular-animate.min"],
                "uiBootstrap":["https://cdn.bootcss.com/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min","lib/angular/ui-bootstrap-tpls.min"],
                "uiRouter":["https://cdn.bootcss.com/angular-ui-router/0.4.2/angular-ui-router.min","lib/angular/angular-ui-router.min"],
                "angular-nice-bar":"lib/angular/angular-nice-bar",
                "asyncLoader":"lib/angular/angular-async-loader",
                "jquery":["https://cdn.bootcss.com/jquery/1.12.4/jquery.min","lib/jquery/jquery.min"],
                "echarts":["https://cdn.bootcss.com/echarts/3.4.0/echarts.min","lib/echarts/echarts.min"],
                "chinaMap":"lib/echarts/china",
                "loadCss":"script/loadCss",
                'load':"script/load",
                "routes":"script/routes",
                "app":"script/app",
                "index":"script/index",
                "superController":"script/superController",
                "myService":"script/myService",
                "myDirective":"script/myDirective"
            },
            shim:{
                "angular":{
                    exports:"angular"
                },
                "uiRouter":{
                    deps:["angular"]
                },
                "angularTouch":{
                    deps:["angular"]
                },
                "angularAnimate":{
                    deps:["angular"]
                },
                "uiBootstrap":{
                    deps:["angular","angularTouch","angularAnimate"]
                },
                "load":{
                    exports:"load"
                },
                "angular-nice-bar":{
                    deps:["angular"]
                },
                "echarts":{"exports":"echarts"}
            },
            deps:['index']
        });
    }
    
}
window.loading.load();