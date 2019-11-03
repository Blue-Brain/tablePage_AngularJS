var dir = angular.module('app.header',[]);

dir.directive ('main', function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: 'firstCtrl',
        templateUrl: 'app/components/header/header.view.html',
        replace: true
    }
})