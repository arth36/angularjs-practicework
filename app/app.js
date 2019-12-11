// we have make this module myNinjaApp and this module will controls all the functionalities
var myNinjaApp = angular.module('myNinjaApp', []);

//config method is just a function that would be fire before your application runs, so any kind of preparation you need to do would go in here
//things like routing
myNinjaApp.config(function(){



});

// this function fire when your application runs
myNinjaApp.run(function(){



});

//this is how we declare our controllers
myNinjaApp.controller('NinjaController', ['$scope', function( $scope ){
    $scope.message="Hey buddy!";
    $scope.ninjas=[
        {
            name: "Yoshi",
            belt: "green",
            rate: 50
        },
        {
            name: "ryu",
            belt: "black",
            rate: 30
        },
        {
            name: "crystal",
            belt: "yellow",
            rate: 10
        },
        {
            name: "shaun",
            belt: "orange",
            rate: 20
        }
    ];
}]);