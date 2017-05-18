var app = angular.module('app', []);
app.controller('drag', function ($scope, $rootScope) {
    //初始化,获取当前保存的宽度和排序
    $scope.modules = [
        {id:'01',grid: 3, order: 1, content: "a"},
        {id:'02',grid: 3, order: 3, content: "b"},
        {id:'03',grid: 3, order: 2, content: "c"},
        {id:'04',grid: 3, order: 5, content: "d"},
        {id:'05',grid: 3, order: 4, content: "e"},
        {id:'06',grid: 3, order: 6, content: "d"}
    ];

    $scope.dosth = function () {
        console.log($scope.modules);
    }

})
    .directive('myBox', function () {
        return {
            restrict: 'AECM',
            templateUrl: 'box.html',
            scope: {
                myOrder:'=',
                myGrid:'=',
                myContent:'='
            },
            replace:true,
            link: function (scope, ele, attrs) {
                scope.do = function(index){
                    console.log(index);
                };


            },
            controller: function ($scope,$element,$attrs) {
                // console.log($scope.myOrder);

            }
        }
    })