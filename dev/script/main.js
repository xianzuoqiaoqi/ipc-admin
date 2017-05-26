/**
 * Created by zzq on 2017/3/17.
 * 配置require、配置资源路径
 */
window.loading = {
    finish: function (callback) {
        //保留这个方法做一些加载完成后的处理，比如可以在这里结束加载动画
        callback();
    },
    load: function () {
        // var domain='https://865077695.github.io/admin/';
        var domain = '';
        var baseUrl = domain + 'res';
        require.config({
            baseUrl: baseUrl,
            paths: {
                "domReady": ["lib/require/domReady.min","https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min"],
                "angular": ["lib/angular/angular.min","https://cdn.bootcss.com/angular.js/1.5.5/angular.min"],
                "angularTouch": ["lib/angular/angular-touch.min","https://cdn.bootcss.com/angular.js/1.3.20/angular-touch.min"],
                "angularAnimate": ["lib/angular/angular-animate.min","https://cdn.bootcss.com/angular.js/1.3.20/angular-animate.min"],
                "uiBootstrap": ["lib/angular/ui-bootstrap-tpls.min","https://cdn.bootcss.com/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min"],
                "uiRouter": ["lib/angular/angular-ui-router.min","https://cdn.bootcss.com/angular-ui-router/0.4.2/angular-ui-router.min"],
                "angular-sanitize": [ "lib/angular/angular-sanitize.min","https://cdn.bootcss.com/angular.js/1.5.5/angular-sanitize.min"],
                "angular-nice-bar": "lib/angular/angular-nice-bar",
                "asyncLoader": "lib/angular/angular-async-loader",
                "jquery": [ "lib/jquery/jquery.min","https://cdn.bootcss.com/jquery/1.12.4/jquery.min"],
                "layer": ["lib/layer/layer"],

                //富文本框
                "trix":['lib/angular-trix/trix'],
                'angularTrix':['lib/angular-trix/angular-trix'],
                "echarts": ["lib/echarts/echarts.min","https://cdn.bootcss.com/echarts/3.4.0/echarts.min"],
                "chinaMap": "lib/echarts/china",
                //zui控制面板
                "zui":"lib/zui/js/zui",
                "dashBoard":"lib/zui/dashboard/zui.dashboard",


                "loadCss": "script/loadCss",
                'load': "script/load",
                "routes": "script/routes",
                "app": "script/app",
                "index": "script/index",
                "superController": "script/superController",
                "myService": "script/myService",
                "myDirective": "script/myDirective"
            },
            shim: {
                "angular": {
                    exports: "angular"
                },
                "uiRouter": {
                    deps: ["angular"]
                },
                "angularTouch": {
                    deps: ["angular"]
                },
                "angularAnimate": {
                    deps: ["angular"]
                },
                "angular-sanitize": {
                    deps: ["angular"]
                },
                "uiBootstrap": {
                    deps: ["angular", "angularTouch", "angularAnimate"]
                },
                "load": {
                    exports: "load"
                },
                "angular-nice-bar": {
                    deps: ["angular"]
                },
                "layer": {
                    deps: ["jquery"]
                },
                "echarts": {
                    "exports": "echarts"
                },
                "angularTrix":{
                    deps:['angular','trix']
                },
                "zui":{
                    deps:['jquery']
                },
                "dashBoard":{
                    deps:['zui']
                }
            },
            deps: ['index']
        });
    }

}
window.loading.load();