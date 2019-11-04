var dir = angular.module('app.table', []);
dir.directive('datatable', function() {
    return {
        restrict: 'E',
        transclude: true,
        controller: 
            function ($scope, $http) {
                console.log("контроллер appTable сработал")
                $http.get('report1.json')
                    .success(function (dataJSON) {
                        $scope.dataForTable = dataJSON.data.body;
                        console.log("dataForTable: ", $scope.dataForTable)
                    })
                    .error (function (err) {
                        console.log("Data is not download ", err)
                    })
                $scope.dateFormater = function (date) {
                    if (date) { 
                        var newDate = new Date(date);
                        return `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`
                    } else return '';
                }
            },
        templateUrl: 'app/components/table/table.view.html',
        replace: true
    }
})