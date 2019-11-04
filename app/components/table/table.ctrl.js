var ctrl = angular.module('app.table');

ctrl.controller('appTable', function ($scope, $http) {
    $http.get('report1.json')
        .success(function (dataJSON) {
            $scope.dataForTable = dataJSON.data.body;
        })
        .error (function (err) {
        })
    $scope.dateFormater = function (date) {
        if (date) { 
            var newDate = new Date(date);
            return `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`
        } else return '';
    }
    $scope.responsible = function(data) {
        if (data) return "Есть"; 
        else return "Нет"
    }
})