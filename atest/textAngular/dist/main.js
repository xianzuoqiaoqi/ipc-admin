/**
 * Created by zzq on 2017/5/22.
 */
require.config({
    baseUrl:'./',
    paths:{
        "angular":['textAngular/angular'],
        "textAngular":['textAngular/textAngular'],
        // "textAngular-sanitize":['textAngular/textAngular-sanitize'],
        "textAngular-rangy":['textAngular/textAngular-rangy.min'],
        "angular-sanitize":['textAngular/angular-sanitize'],
        "demo":['dist/demo']
    },
    shim:{
        'angular':{
            exports:"angular"
        },
        'textAngular':{
            deps:['angular-sanitize','textAngular-rangy','angular'],
            exports:'textAngular'
        },
        'angular-sanitize':{
            deps:['angular'],
            exports:'ngSanitize'
        }
    }
});

define(['angular','textAngular','angular-sanitize'],function(angular,textAngular,ngSanitize){
    angular.module('textAngularTest',['textAngular','ngSanitize'])
    //     .controller('myCtrl',function($scope,textAngularManager){
    //         console.log(textAngularManager);
    //
    //
    //
    //         $scope.html = '<h1>asdasd</h1>';
    //         console.log($scope.html);
    //     })
})