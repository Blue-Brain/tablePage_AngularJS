var app = angular.module('app.header');

app.controller("appHeader", function($scope, $http) {
    
    $http.get('user.json')
        .success(function (dataJSON) {
            $scope.userShortName = dataJSON.data.short_name;
            $scope.position = dataJSON.data.position.name;
            $scope.company = dataJSON.data.provider.str_name;
        });
})