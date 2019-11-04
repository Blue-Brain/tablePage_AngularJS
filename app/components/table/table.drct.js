var dir = angular.module('app.table', []);
dir.directive('datatable', function() {
    return {
        restrict: 'E',
        transclude: true,
        controller: 'appTable',
        templateUrl: 'app/components/table/table.view.html',
        replace: true
    }
})