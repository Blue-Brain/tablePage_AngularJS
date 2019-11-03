var ctrl = angular.module('app', ['components']);
ctrl.controller('myHeader', function ($scope, $http) {
    $http.get('user.json')
        .success(function(data) {
            $scope.user = data;
            console.log('SUCCESS', data)
        })
        .error (function (err) {
            console.log('err: ', err)
        })
})