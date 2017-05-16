var app = angular.module('app',[]);
app.controller('drag',function($scope){
    //初始化,设置宽度和排序
    $scope.initStyles = [
        {grid:3,order:1,content:"a"},
        {grid:3,order:2,content:"b"},
        {grid:3,order:3,content:"c"},
        {grid:3,order:4,content:"d"}
    ];
    $scope.name = 'aaaa';
    $scope.a = 1;
})
.directive('myGrid',function(){
    return {
        restrict:'AECM',
        scope:{
            name:'@myGrid'                    //myName就是原来元素中的my-grid属性，这样my-Grid内的myGrid就和父作用域的myGrid绑定了
        },
        link:function(scope,ele,attr){
            // console.log(ele);
            console.log(attr.$attr);
            console.log(ele);
            console.log(ele.removeClass)
            console.log(1);
        }
    }
})