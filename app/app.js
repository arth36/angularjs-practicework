// we have make this module myNinjaApp and this module will controls all the functionalities
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

//config method is just a function that would be fire before your application runs, so any kind of preparation you need to do would go in here
//things like routing
myNinjaApp.config(['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when( '/directory',{
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .when( '/contact',{
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when( '/contact-success',{
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);

// this function fire when your application runs
myNinjaApp.run(function(){



});


myNinjaApp.directive('randomNinja', [function(){
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);

//this is how we declare our controllers
myNinjaApp.controller('NinjaController', ['$scope', '$http', function( $scope, $http ){
    $scope.message="Hey buddy!";

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true
        });

        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";

    };

    $scope.removeAll = function(){
        $scope.ninjas = [];
    }

    $http.get('data/ninjas.json').then(successCallback, errorCallback);

    function successCallback(data){
        $scope.ninjas = data.data;
    }
    function errorCallback(error){
        console.log('Sorry no Data');
    }

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };
}]);