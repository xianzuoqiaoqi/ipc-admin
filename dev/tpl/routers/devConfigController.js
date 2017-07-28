/**
 * Created by zzq on 2017/7/11.
 */
define(['app', 'loadCss', 'myService', 'jsonViewer'], function (app, loadCss) {
    //引入css
    loadCss.loadCss('res/lib/json-viewer/jquery.json-viewer.css');
    loadCss.loadCss('res/css/devConfig.css');
    app.controller('devConfigController', function ($scope, myService, $stateParams) {
        // 路由参数
        var devTypeId = $stateParams.devTypeId;
        //
        $scope.data ={"capabilities": [{
                "wifi": [
                    {"smLink": "1"},
                    {"soundWave": "1"},
                    {"ORCode": "1"}
                ]
            }, {
                "4g": "1"
            }, {
                "cloudController": "1"
            }]
        };

        var arr = ["capabilities", "wifi", "smLink", "soundWave", "ORCode", "4g", "cloudController"];
        $scope.flag = true;
        $scope.errorInfo = false;
        // keyup
        $scope.renderJson = function () {
            $scope.errorInfo = false;
            var fault = [];
            $scope.flag = false;
            try {
                $scope.data = eval('(' + $('#json-input').val() + ')');
            }
            catch (ee) {
                $scope.errorInfo = true;
                $scope.flag = true;
            }
            $('#json-renderer').jsonViewer($scope.data);
            var str = JSON.stringify($scope.data);
            reg(str,fault);
        }


        $('#json-renderer').jsonViewer($scope.data);

        // 检测key是否正确
        function reg(str,fault) {
            var regexp = /[\w]+[\s|\w]*[a-z]+/g;
            var newArr = str.match(regexp);
            for (var i = 0, len = newArr.length; i < len; i++) {
                    var res = $.inArray(newArr[i], arr);
                    // 如果写错了,就把这个错误的key存入fault数组
                    if(res == '-1'){
                        fault.push(newArr[i])
                    }
            }
            console.log(fault)
            if(fault.length > 0){
                $scope.flag = true;
            }
            for(var k = 0 , leng = fault.length; k<leng; k++){
                var dom = $('#json-renderer').find('.json-key:contains(' + fault[k]+')');
                dom.css({"color":"red"})
            }
        }
    })
})