var dir = angular.module("components", []);
dir.directive("header", function ($scope){
    return {
        restrict: "E",
        
        templateUrl: "app/views/header.copmonent.html"
    }
})