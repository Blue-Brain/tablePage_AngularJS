var dir = angular.module('components', []);

dir.directive ('main', function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: 'firstCtrl',
        templateUrl: 'app/views/main.view.html',
        replace: true
    }
})