var app = angular.module('app.header');

app.controller("appCtrl", function($scope, $http) {
    console.log('scope Ctrl: ', $scope)
    
    $scope.tempInput="TEST_TASK";
    $http.get('array.json')
        .success(function (data) {
            $scope.tasksArray = data.tasks;
            console.log("Data success download", $scope.tasksArray)
        });
})

app.controller("firstCtrl", function($scope){
    $scope.addNew = function () {
        if ($scope.tempInput) { 
            $scope.tasksArray.push($scope.tempInput);
            $scope.tempInput = "";
        } else {
            console.log("Введите текст в инпут")
        }       
    }

    $scope.deleteItem = function (item) {
        var index = $scope.tasksArray.indexOf(item);
        $scope.tasksArray.splice(index, 1) 
        console.log (index);
    }
});