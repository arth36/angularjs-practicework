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

    }

    $scope.ninjas=[
        {
            name: "Yoshi",
            belt: "green",
            rate: 50,
            available: true,
            thumb: "content/img/yoshi.jpg"
        },
        {
            name: "ryu",
            belt: "black",
            rate: 30,
            available: true,
            thumb: "content/img/ryu.png"
        },
        {
            name: "crystal",
            belt: "yellow",
            rate: 10,
            available: false,
            thumb: "content/img/crystal.jpg"
        },
        {
            name: "shaun",
            belt: "orange",
            rate: 20,
            available: true,
            thumb: "content/img/shaun.jpg"
        }
    ];
}]);