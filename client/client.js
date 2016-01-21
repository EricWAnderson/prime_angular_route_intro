/**
 * Created by ericanderson on 1/21/16.
 */
var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
   $routeProvider
       .when('/red', {
          templateUrl: 'views/red.html',
           controller: 'RedController'
       })

       .when('/green', {
           templateUrl: 'views/green.html',
           controller: 'GreenController'
       })

       .when('/blue', {
           templateUrl: 'views/blue.html',
           controller: 'BlueController'
       })

       .when('/orange', {
           templateUrl: 'views/orange.html',
           controller: 'OrangeController'
       });

}]);

app.controller("MainController", ['$scope', 'fooService', function($scope, fooService){
    $scope.countRed = fooService.countRed;
    $scope.countGreen = fooService.countGreen;
    $scope.countBlue = fooService.countBlue;
    $scope.countOrange = fooService.countOrange;
}]);

app.controller("RedController", ['$scope', 'fooService', function($scope, fooService){
    $scope.hello = "hello red world";
    $scope.data = fooService.data;
}]);

app.controller("GreenController", ['$scope', 'fooService', function($scope, fooService){
    $scope.hello = "hello green world";
    $scope.data = fooService.data;
}]);

app.controller("BlueController", ['$scope', 'fooService', function($scope, fooService){
    $scope.hello = "hello blue world";
    $scope.data = fooService.data;
}]);

app.controller("OrangeController", ['$scope', 'fooService', function($scope, fooService){
    $scope.hello = "hello orange world";
    $scope.data = fooService.data;
}]);

app.factory("fooService", ['$http', function($http){
    var data = {
        red: 0,
        green: 0,
        blue: 0,
        orange: 0
    };

    var countRed = function(){
        data.red++;
        console.log(data.red);
    };

    var countGreen = function(){
        data.green++;
        console.log(data.green);
    };

    var countBlue = function(){
        data.blue++;
        console.log(data.blue);
    };

    var countOrange = function(){
        data.orange++;
        console.log(data.orange);
    };

    return {
        data: data,
        countRed: countRed,
        countGreen: countGreen,
        countBlue: countBlue,
        countOrange: countOrange
    }
}]);