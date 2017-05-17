var app = angular.module('app', []);
app.controller('drag', function ($scope, $rootScope) {
    //初始化,设置宽度和排序
    $scope.modules = [
        {grid: 3, order: 1, content: "a"},
        {grid: 3, order: 2, content: "b"},
        {grid: 3, order: 3, content: "c"},
        {grid: 3, order: 4, content: "e"},
        {grid: 3, order: 5, content: "f"},
        {grid: 3, order: 6, content: "g"}
    ];

    $scope.dosth = function () {
        console.log($scope.modules);
    }

})
    .directive('myBox', function () {
        return {
            restrict: 'AECM',
            templateUrl: 'box.html',
            scope: true,
            link: function (scope, ele, attrs) {
                scope.do = function(index){
                    console.log(index);
                }
            },
            controller: function ($scope,$element,$attrs) {
                // console.log($scope.myOrder);

            }
        }
    })