var dir = angular.module("components", []);
dir.directive("header", function ($scope){
    return {
        restrict: "E",
        controller: "myHeader",
        templateUrl: "<div> Hello</div>"
    }
})