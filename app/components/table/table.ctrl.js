var ctrl = angular.module('app.table');

ctrl.controller('appTable', function ($scope, $http) {
    console.log("контроллер appTable сработал")
    $http.get('report1.json')
        .success(function (data) {
            $scope.dataForTable = data.body;
            console.log("dataForTable: ", $scope.dataForTable)
        })
        .error (function (err) {
            console.log("Data is not download ", err)
        })
})