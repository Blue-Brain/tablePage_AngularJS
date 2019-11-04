var app = angular.module('app.header');

app.controller("appHeader", function($scope, $http) {
    console.log('scope Ctrl: ', $scope)
    
    $http.get('user.json')
        .success(function (dataJSON) {
            $scope.userShortName = dataJSON.data.short_name;
            $scope.position = dataJSON.data.position.name;
            $scope.company = dataJSON.data.provider.str_name;

            console.log("Data success download", 
                $scope.userShortName, $scope.position, $scope.company)
        });
})