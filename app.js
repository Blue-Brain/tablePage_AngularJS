angular.module("app", ['components'])
.controller("appCtrl", function($scope) {
    $scope.tempInput="TEST_TASK";
    $scope.tasksArray=["Task1", "TASK 2"];
})
