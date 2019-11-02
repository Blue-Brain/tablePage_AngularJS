angular.module('components', [])
.directive ('main', function () {
    return {
        restrict: 'E',
        transclude: true,
        controller: function($scope){
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
        },
        templateUrl: 'app/views/mainView.component.html',
        replace: true
    }
})