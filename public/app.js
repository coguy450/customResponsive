'use strict';

    var app = angular.module('app', ['ngRoute'])

    .controller('MainController', function ($scope, $window) {
        $scope.determineDevice = function() {
            switch (true) {
                case $scope.pageWidth < 481:
                    $scope.deviceType = 'Mobile';
                    break;
                case ($scope.pageWidth > 480 && $scope.pageWidth < 1024):
                    $scope.deviceType = 'Tablet';
                    break;
                case ($scope.pageWidth > 1024):
                    $scope.deviceType = 'Desktop';
                    break;
                default:
                    $scope.deviceType = 'Desktop';
            }
        }
        $scope.pageHeight = $window.innerHeight;
        $scope.pageWidth = $window.innerWidth;
        $scope.determineDevice();
        function onResize () {
            $scope.pageHeight = $window.innerHeight;
            $scope.pageWidth = $window.innerWidth;
        }
        angular.element($window).on('resize', function(newWindow) {
            $scope.pageHeight = newWindow.target.innerHeight;
            $scope.pageWidth = newWindow.target.innerWidth;
            $scope.determineDevice();
            $scope.$digest()
        });








    })


    .config(['$routeProvider', '$controllerProvider', '$provide', function ($routeProvider) {

            //This can be used for your client side routing
        $routeProvider
            .when('/', {
                templateUrl: 'modules/core/views/main.html',
                controller: 'MainController'
            })
            .when('/db',{
                templateUrl: 'modules/dbConsole/dbconsole.client.view.html',
                controller: 'dbConsoleController'
            })



    }]);
