var dir = angular.module('app.header',[]);

dir.directive ('myheader', function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: 'appHeader',
        templateUrl: 'app/components/header/header.view.html',
        replace: true
    }
})