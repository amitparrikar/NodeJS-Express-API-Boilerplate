/**
 * Created by Amit on 22/11/15.
 */

var expressApp = angular.module('ExpressApp', []);

expressApp.run(function(){

});

expressApp.config(function(){

});

expressApp.controller('expressController', ['$scope', 'expressService', function($scope, expressService){
    $scope.showLogin = true;
    $scope.user = {};
    $scope.newUser = {};
    $scope.apiConfig = {};
    $scope.methodObj = ['GET', 'POST', 'DELETE', 'PUT'];

    $scope.login = function(){
        expressService.login($scope.user).then(function(data){
            $scope.urlObj = [{url: '/users/' + $scope.user.email, desc: 'Get current Users'}, {url: '/users/' + $scope.user.email, desc: 'Delete current User'}];
            $scope.showLogin = false;
            $scope.apiOutput = data;
        }, function(data){
            $scope.apiOutput = data;
        });
    };

    $scope.createNew = function(){
        expressService.fireAPI({ url: '/users', method: 'POST', data: JSON.stringify($scope.newUser) }).then(function (data) {
            $scope.newUser = {};
            $scope.apiOutput = data;
        });
    }

    $scope.fireAPI = function(){
        expressService.fireAPI($scope.apiConfig).then(function(data){
            $scope.apiOutput = data;
        }, function(data){
            $scope.apiOutput = data
        });
    }

}]);

expressApp.service('expressService', ['$q', '$http', function($q, $http){

    this.login = function(userData){
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/login',
            data: userData
        }).success(function(data, status){
            deferred.resolve(data);
        }).error(function(data, status){
            deferred.reject(data);
        });

        return deferred.promise;
    };

    this.fireAPI = function(config){
        var deferred = $q.defer();
        $http({
            method: config.method.toString(),
            url: config.url.toString(),
            data: JSON.parse(config.data)
        }).success(function(data, status){
            deferred.resolve(data);
        }).error(function(data, status){
            deferred.reject(data);
        });

        return deferred.promise;
    };


}])